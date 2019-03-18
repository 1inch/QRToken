import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Web3Service} from '../../util/web3.service';
import {QRTOKEN_SMART_CONTRACT_ADDRESS, QRTOKEN_SMART_CONTRACT_ADDRESS_v1} from '../../util/qrtoken-smart-contract';
import {MerkleTree} from '../../util/merkle-tree';
import {Token} from '../../util/token';
import {TOKENS} from '../../util/tokens';
import {WalletService} from '../../util/wallet.service';
import {ZERO_FEE} from '../../util/zero-fee';
import {HttpClient} from '@angular/common/http';

declare let Buffer: any;

declare let require: any;
const qrtokenContractArtifacts = require('../../util/QRTokenABI.json');

@Component({
    selector: 'app-redeem-form',
    templateUrl: './redeem-form.component.html',
    styleUrls: ['./redeem-form.component.css']
})
export class RedeemFormComponent implements OnInit {

    loading = false;
    status = '';

    done = false;
    account;
    token: Token;
    proof;
    privateKey;

    tokensAmount;
    receiver;
    tokenName;
    fee;
    gasPrice;
    withFee = false;
    isRedeemed;
    root;
    index;
    contract;

    tokens: Token[] = TOKENS;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private web3Service: Web3Service,
        private walletService: WalletService,
        private zone: NgZone,
        private http: HttpClient
    ) {

    }

    async processParams() {

        const data = this.route.snapshot.paramMap.get('data')
            .replace(/-/g, '/')
            .replace(/_/g, '+');

        const buffer = new Buffer(data, 'base64');

        let contract;
        let privateKey;

        if (this.router.url.substr(0, 3) === '/r/') {
            contract = new this.web3Service.web3.eth.Contract(qrtokenContractArtifacts, QRTOKEN_SMART_CONTRACT_ADDRESS_v1);
            privateKey = buffer.slice(0, 32);
            this.proof = buffer.slice(32);
        } else {
            contract = new this.web3Service.web3.eth.Contract(qrtokenContractArtifacts, '0x' + buffer.slice(0, 20).toString('hex'));
            privateKey = buffer.slice(20, 52);
            this.proof = buffer.slice(52);
        }

        let proof = this.proof;

        // console.log('privateKey', privateKey.toString('hex'));

        this.privateKey = privateKey;

        const proofs = [];

        while (proof.slice(0, 20).length > 0) {
            const slice = proof.slice(0, 20);
            proof = proof.slice(20);

            proofs.push(slice.toString('hex'));
        }

        this.account = this.web3Service.web3.eth.accounts
            .privateKeyToAccount('0x' + privateKey.toString('hex'));

        const {root, index} = MerkleTree.applyProof(this.account.address, proofs);

        this.root = root;
        this.index = index;
        this.contract = contract;

        this.zone.run(async () => {
            this.isRedeemed = await contract.methods
                .redeemed(
                    root,
                    index
                )
                .call();
        });

        if (this.isRedeemed) {
            this.zone.run(async () => {
                this.loading = false;
            });

            return;
        }

        //
        // console.log('Account', this.account);

        // console.log('Root', '0x' + root.toString('hex'));
        // console.log('Index', index);
        //
        // console.log('proofs', proofs);

        const distribution = await contract.methods
            .distributions('0x' + root.toString('hex'))
            .call();

        // console.log('distribution', distribution);

        for (const token of this.tokens) {

            if (token.address.toLowerCase() === distribution['token'].toLowerCase()) {

                this.zone.run(async () => {
                    this.tokenName = token.name;

                    this.token = token;

                    const decimals = await this.walletService.getDecimals(token.address);
                    this.tokensAmount = (distribution['sumAmount'] / (10 ** decimals)) / distribution['codesCount'];

                    const gasPriceRequest = this.http.get('https://gasprice.poa.network');
                    const pairs = this.http.get('https://tracker.kyber.network/api/tokens/pairs');

                    pairs.subscribe(d => {

                        gasPriceRequest.subscribe(gasPriceResponse => {

                            // console.log('Token Pair', d['ETH_' + this.token.symbol]);

                            const lastPrice = d['ETH_' + this.token.symbol]['lastPrice'];
                            this.gasPrice = gasPriceResponse['fast'] * 1e9;
                            this.fee = 400000 * this.gasPrice / lastPrice / 10 ** 18;

                            // console.log('Fees', this.fee);

                            this.fee = Math.ceil(this.fee * 100 / this.tokensAmount);

                            // console.log('Fees', this.fee);
                        });
                    });
                });

                break;
            }
        }
    }

    async ngOnInit() {

        this.loading = true;

        this.web3Service.getAccounts()
            .subscribe(
                async (addresses) => {

                    this.receiver = addresses[0];
                    this.processParams();

                    this.loading = false;
                },
                async (err) => {

                    this.processParams();
                    this.withFee = true;
                    this.loading = false;
                }
            );
    }

    async onSubmit() {

        this.loading = true;

        this.web3Service.getAccounts()
            .subscribe(
                async (addresses) => {

                    const signatureObject = this.account.sign(
                        this.web3Service.web3.utils.keccak256(
                            this.web3Service.web3.utils.padLeft(this.receiver, 40)
                            , {encoding: 'hex'}
                        )
                    );

                    const signature = signatureObject.signature;

                    // console.log('signatureObject', signatureObject);
                    // console.log('Signature', signature);
                    // console.log('Proof', this.proof);

                    await this.walletService
                        .transferTokens(addresses[0], signature, this.proof);

                    this.zone.run(async () => {
                        this.loading = false;
                        this.done = true;
                    });
                },
                async (err) => {

                    const transferAccount = this.web3Service.web3.eth.accounts
                        .privateKeyToAccount('0x' + ZERO_FEE);

                    this.web3Service.web3.eth.accounts.wallet.add('0x' + ZERO_FEE);
                    this.web3Service.web3.eth.defaultAccount = transferAccount.address;

                    try {

                        const nonce = await this.web3Service.web3.eth.getTransactionCount(transferAccount.address);

                        this.isRedeemed = await this.contract.methods
                            .redeemed(
                                this.root,
                                this.index
                            )
                            .call();

                        console.log('isRedeemed', this.isRedeemed);

                        if (!this.isRedeemed) {
                            const tx = this.walletService
                                .transferTokensByZeroTransactionGasFee(
                                    this.account, transferAccount.address, this.receiver, this.fee, this.gasPrice, this.proof, nonce);

                            console.log('TX', tx);

                            const scope = this;

                            tx
                                .once('transactionHash', function(hash){

                                    console.log('hash', hash);

                                    scope.zone.run(async () => {
                                        scope.done = true;
                                        scope.loading = false;
                                    });
                                })
                                .once('receipt', function(receipt){

                                    console.log('receipt', receipt);

                                    scope.zone.run(async () => {
                                        scope.status = '';
                                        scope.done = true;
                                        scope.loading = false;
                                    });
                                })
                                .on('confirmation', function(confNumber, receipt){

                                    console.log('confNumber', confNumber);
                                    console.log('receipt', receipt);
                                })
                                .on('error', function(error){

                                    console.log('error', error);
                                })
                                .then((receipt) => {

                                    console.log('Receipt', receipt);

                                    this.zone.run(async () => {
                                        this.done = true;
                                        this.loading = false;
                                    });
                                })
                                .catch((error) => {

                                    console.log('Error', error);

                                    this.zone.run(async () => {
                                        this.loading = false;
                                    });
                                });
                        } else {
                            this.zone.run(async () => {
                                this.loading = false;
                            });
                        }
                    } catch (e) {
                        alert(e.toString());
                        console.error(e);

                        this.zone.run(async () => {
                            this.loading = false;
                        });
                    }
                }
            );
    }
}
