import {Component, NgZone, OnInit} from '@angular/core';
import {faThumbsUp, faUnlock} from '@fortawesome/free-solid-svg-icons';
import {WalletService} from '../../util/wallet.service';
import {Token} from '../../util/token';
import {Web3Service} from '../../util/web3.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import {MerkleTree} from '../../util/merkle-tree';

declare let require: any;
declare let Buffer: any;
const QRCode = require('qrcode');

@Component({
    selector: 'app-issue-form',
    templateUrl: './issue-form.component.html',
    styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit {

    selectedTokenAddress = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52';
    selectedToken: Token;
    cardsAmount = 8;
    tokenAmount = '';
    unlockIcon = faUnlock;
    thumbsUpIcon = faThumbsUp;
    loading = false;
    QRCodes = [];

    hidePrintButtons = false;

    tokens: Token[] = [
        {
            address: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
            icon: 'assets/icons/bnb.png',
            name: 'BNB - Binance Coin',
            balance: Number(0),
            allowance: 0,
            inApproval: false
        },
        {
            address: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
            icon: 'assets/icons/dai_stablecoin.png',
            name: 'DAI - DAI Stable Coin',
            balance: Number(0),
            allowance: 0,
            inApproval: false
        },
        {
            address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            icon: 'assets/icons/usdc.png',
            name: 'USDC - USD Coin',
            balance: Number(0),
            allowance: 0,
            inApproval: false
        },
        {
            address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
            icon: 'assets/icons/wbtc.png',
            name: 'WBTC - Wrapped Bitcoin',
            balance: Number(0),
            allowance: 0,
            inApproval: false
        },
    ];

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
                        // console.log('Token allowance', this.selectedToken.allowance);
                    });
                }
            });
    }

    async create() {

        this.loading = true;

        // console.log('Cards amount', this.cardsAmount);

        const privateKeys = [];

        for (let i = 0; i < this.cardsAmount; i++) {
            privateKeys.push(this.web3Service.web3.eth.accounts.create());
        }

        // console.log('privateKeys1', privateKeys);

        const accounts = privateKeys.map(pk => pk.address);

        const merkleTree = new MerkleTree(accounts);

        // console.log('pk accounts', privateKeys.map(pk => pk.address));

        // console.log(merkleTree);

        // this.storeMerkleTree(merkleTree);
        const cards = this.generateCards(privateKeys.map(pk => pk.privateKey), merkleTree);
        this.QRCodes = (await this.generateQRCodes(cards)).map(qr => {
            return {
                qr: qr, index: null
            };
        });

        // setTimeout(this.generatePDF, 300);

        this.loading = false;
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

            var c = new Uint8Array(privateKeyBuffer.length + merkleTreeBuffer.length);
            c.set(privateKeyBuffer);
            c.set(merkleTreeBuffer, privateKeyBuffer.length);

            const bufferToBase64 = function (buf) {
                var binstr = Array.prototype.map.call(buf, function (ch) {
                    return String.fromCharCode(ch);
                }).join('');
                return btoa(binstr);
            };

            const content = bufferToBase64(c).replace(/\//g, '-').replace(/\+/g, '_');

            // console.log('Base64', content);

            result.push(
                'https://qrtoken.io/#/r/' + content
            );
        }

        // console.log('privateKeys', privateKeys);
        // console.log('Urls', result);

        return result;
    }
}
