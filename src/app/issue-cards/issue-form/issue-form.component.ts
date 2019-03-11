import {Component, NgZone, OnInit} from '@angular/core';
import {faThumbsUp, faUnlock} from '@fortawesome/free-solid-svg-icons';
import {WalletService} from '../../util/wallet.service';
import {Token} from '../../util/token';
import {Web3Service} from '../../util/web3.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import {MerkleTree} from '../../util/merkle-tree';
import {QRTOKEN_SMART_CONTRACT_ADDRESS} from '../../util/qrtoken-smart-contract';
import {TOKENS} from '../../util/tokens';

declare let require: any;
declare let Buffer: any;
const QRCode = require('qrcode');

const qrtokenContractArtifacts = require('../../util/QRTokenABI.json');
// const tokenContractArtifacts = require('../../util/TokenABI.json');

declare let window: any;

@Component({
    selector: 'app-issue-form',
    templateUrl: './issue-form.component.html',
    styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit {

    selectedTokenAddress = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52';
    selectedToken: Token;
    cardsAmount = 4;
    tokenAmount = 0.01;
    unlockIcon = faUnlock;
    thumbsUpIcon = faThumbsUp;
    loading = false;
    QRCodes = [];

    hidePrintButtons = false;
    tokenBalance: any;

    tokens: Token[] = TOKENS;

    constructor(
        private walletService: WalletService,
        private zone: NgZone,
        private web3Service: Web3Service
    ) {
    }

    ngOnInit() {

        // this.walletService.getListOfTokens();
        this.setTokenBySelectedAddress();

        if (this.selectedToken.address != null) {
            this.getAllowance(this.selectedToken);
        }
    }

    selectToken($event) {

        this.setTokenBySelectedAddress();
    }

    setTokenBySelectedAddress() {

        for (const token of this.tokens) {

            if (token.address === this.selectedTokenAddress) {
                this.selectedToken = token;

                // console.log('Selected token:', this.selectedToken);

                this.getAllowance(token);
                this.getBalance(token);
            }
        }
    }

    approveToken(token: Token) {

        // console.log('Approve');

        token.inApproval = true;

        this.walletService.approveToken(token)
            .subscribe(data => {

                this.getAllowance(token);
            });
    }

    getAllowance(token: Token) {

        token.inApproval = true;

        this.walletService.getAllowance(token)
            .subscribe((_token: Token) => {

                if (this.selectedToken.address === _token.address) {
                    this.zone.run(() => {
                        this.selectedToken.allowance = _token.allowance;
                        this.selectedToken.inApproval = false;
                        console.log('Token allowance', this.selectedToken.allowance);
                    });
                }
            });
    }

    getBalance(token: Token) {

        token.inApproval = true;
        this.tokenBalance = '';

        this.walletService.getBalance(token)
            .subscribe((_token: Token) => {

                if (this.selectedToken.address === _token.address) {
                    this.zone.run(() => {
                        this.selectedToken.balance = _token.balance;
                        this.updateBalance();

                        token.inApproval = false;
                        console.log('Token balance', this.selectedToken.balance);
                    });
                }
            });
    }

    async updateBalance() {

        const decimals = await this.walletService.getDecimals(this.selectedToken.address);
        this.tokenBalance = (this.selectedToken.balance / 10 ** decimals).toFixed(8);
    }

    async create() {

        this.loading = true;

        console.log('Cards amount', this.cardsAmount);

        const privateKeys = [];

        for (let i = 0; i < this.cardsAmount; i++) {
            privateKeys.push(this.web3Service.web3.eth.accounts.create());
        }

        console.log('privateKeys1', privateKeys);

        const accounts = privateKeys.map(pk => pk.address);

        const merkleTree = new MerkleTree(accounts);

        console.log('pk accounts', privateKeys.map(pk => pk.address));

        console.log(merkleTree);

        await this.storeMerkleTree(merkleTree);
        const cards = this.generateCards(privateKeys.map(pk => pk.privateKey), merkleTree);
        this.QRCodes = (await this.generateQRCodes(cards)).map(qr => {
            return {
                qr: qr, index: null
            };
        });

        // setTimeout(this.generatePDF, 300);

        this.getBalance(this.selectedToken)

        this.loading = false;
    }

    async storeMerkleTree(merkleTree: MerkleTree) {

        const scope = this;

        return new Promise(
            async function (resolve, reject) {

                scope.web3Service.getAccounts().subscribe(async (addresses) => {

                    const contract = new scope.web3Service.web3.eth.Contract(qrtokenContractArtifacts, QRTOKEN_SMART_CONTRACT_ADDRESS);

                    console.log('Root', merkleTree.getHexRoot());
                    console.log('Layers', merkleTree.layers);

                    // const tokenContract = new scope.web3Service.web3.eth.Contract(tokenContractArtifacts, scope.selectedToken.address);

                    // console.log('Token Contract', tokenContract);

                    // const decimals = await tokenContract.methods.decimals().call();
                    const decimals = await scope.walletService.getDecimals(scope.selectedToken.address);

                    const result = await contract.methods
                        .create(
                            scope.selectedToken.address,
                            scope.web3Service.web3.utils.toHex(scope.tokenAmount * 10 ** decimals),
                            scope.cardsAmount,
                            merkleTree.getHexRoot(),
                            Math.trunc(Date.now() / 1000 + 60 * 60 * 24 * 7)
                        )
                        .send({
                            from: addresses[0]
                        });

                    resolve(result);
                });
            });
    }

    print(index: number) {

        this.hidePrintButtons = true;

        const scope = this;

        setTimeout(function () {

            scope.generatePDF(index);
        }, 300);
    }

    public generatePDF(index: number) {

        const data = document.getElementById('contentToConvert' + index);

        // console.log('Data:', data);

        html2canvas(data).then(canvas => {

            // console.log('Canvas:', canvas);

            // Few necessary setting options
            const imgWidth = 145;
            const pageHeight = 295;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const heightLeft = imgHeight;

            const contentDataURL = canvas.toDataURL('image/png');
            const pdf = new jspdf({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a6'
            }); // A4 size page of PDF
            const position = 0;

            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('MYPdf' + index + '.pdf'); // Generated PDF

            this.hidePrintButtons = false;
        });
    }

    hasMetamask() {
        return window.ethereum || window.web3;
    }

    private async generateQRCodes(vCards: any) {

        const QRCodes = await Promise.all(vCards.map(value => QRCode.toDataURL(value)));

        // console.log('QRCodes', QRCodes);

        return QRCodes;
    }

    private generateCards(privateKeys: Array<string>, merkleTree: MerkleTree) {

        const result = [];

        for (let index = 0; index < privateKeys.length; index++) {

            const privateKeyBuffer = new Buffer(this.web3Service.web3.utils.hexToBytes(privateKeys[index]));
            const merkleTreeBuffer = Buffer.concat(merkleTree.getProof(index));

            console.log('Proof', Buffer.concat(merkleTree.getProof(index)).toString('hex'));

            const c = new Uint8Array(privateKeyBuffer.length + merkleTreeBuffer.length);
            c.set(privateKeyBuffer);
            c.set(merkleTreeBuffer, privateKeyBuffer.length);

            const bufferToBase64 = function (buf) {
                const binstr = Array.prototype.map.call(buf, function (ch) {
                    return String.fromCharCode(ch);
                }).join('');

                return btoa(binstr);
            };

            const content = bufferToBase64(c).replace(/\//g, '-').replace(/\+/g, '_');

            console.log('Base64', content);

            result.push(
                'https://qrtoken.io/#/r/' + content
            );
        }

        console.log('privateKeys', privateKeys);
        console.log('Urls', result);

        return result;
    }
}
