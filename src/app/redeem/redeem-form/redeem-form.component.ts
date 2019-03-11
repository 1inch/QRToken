import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Web3Service} from '../../util/web3.service';
import {QRTOKEN_SMART_CONTRACT_ADDRESS} from '../../util/qrtoken-smart-contract';
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

    done = false;
    account;
    token: Token;
    proof;
    privateKey;

    tokensAmount;
    receiver;
    tokenName;
    fee;
    withFee = false;
    isRedeemed;

    tokens: Token[] = TOKENS;

    constructor(
        private route: ActivatedRoute,
        private web3Service: Web3Service,
        private walletService: WalletService,
        private zone: NgZone,
        private http: HttpClient
    ) {
    }

    async processParams() {

        const contract = new this.web3Service.web3.eth.Contract(qrtokenContractArtifacts, QRTOKEN_SMART_CONTRACT_ADDRESS);

        const data = this.route.snapshot.paramMap.get('data')
            .replace(/-/g, '/')
            .replace(/_/g, '+');

        const buffer = new Buffer(data, 'base64');

        const privateKey = buffer.slice(0, 32);
        this.proof = buffer.slice(32);
        let proof = this.proof;

        console.log('privateKey', privateKey.toString('hex'));

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
        console.log('Account', this.account);

        console.log('Root', '0x' + root.toString('hex'));
        console.log('Index', index);

        console.log('proofs', proofs);

        const distribution = await contract.methods
            .distributions('0x' + root.toString('hex'))
            .call();

        console.log('distribution', distribution);

        for (const token of this.tokens) {

            if (token.address === distribution['token']) {

                this.zone.run(async () => {
                    this.tokenName = token.name;

                    this.token = token;

                    const decimals = await this.walletService.getDecimals(token.address);
                    this.tokensAmount = (distribution['sumAmount'] / (10 ** decimals)) / distribution['codesCount'];

                    const pairs = this.http.get('https://tracker.kyber.network/api/tokens/pairs');

                    pairs.subscribe(d => {
                        const lastPrice = d['ETH_' + this.token.symbol]['lastPrice'];
                        this.fee = 400000 * 5e9 / lastPrice / (10 ** d['ETH_' + this.token.symbol]['decimals']);

                        console.log('Fees', this.fee);

                        this.fee = Math.ceil(this.fee * 100 / this.tokensAmount);

                        console.log('Fees', this.fee);
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
                        await this.walletService
                            .transferTokensByZeroTransactionGasFee(
                                this.account, transferAccount.address, this.receiver, this.fee, this.proof);

                        this.zone.run(async () => {
                            this.done = true;
                        });
                    } catch (e) {
                        alert(e.toString());
                        console.error(e);
                    }


                    this.zone.run(async () => {
                        this.loading = false;
                    });
                }
            );
    }
}
