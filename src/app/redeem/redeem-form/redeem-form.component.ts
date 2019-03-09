import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Web3Service} from '../../util/web3.service';
import {MerkleTree} from '../../../../../VIC/src/app/util/merkle-tree';
import {QRTOKEN_SMART_CONTRACT_ADDRESS} from '../../util/qrtoken-smart-contract';

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

    tokensAmount = 1;
    tokenName = 'BNB';
    fee = 10;

    fees = [
        {
            name: '2.5%',
            value: 2.5
        },
        {
            name: '5%',
            value: 5
        },
        {
            name: '10%',
            value: 10
        },
        {
            name: '15%',
            value: 15
        },
    ];

    constructor(
        private route: ActivatedRoute,
        private web3Service: Web3Service
    ) {
    }

    async ngOnInit() {

        this.web3Service.getAccounts().subscribe(async (addresses) => {

            const data = this.route.snapshot.paramMap.get('data')
                .replace(/-/g, '/')
                .replace(/_/g, '+');

            const buffer = new Buffer(data, 'base64');

            const privateKey = buffer.slice(0, 32);
            let proof = buffer.slice(32);

            const proofs = [];

            while (proof.slice(0, 20).length > 0) {
                const slice = proof.slice(0, 20);
                proof = proof.slice(20);

                proofs.push(slice.toString('hex'));
            }

            const account = this.web3Service.web3.eth.accounts
                .privateKeyToAccount(privateKey);

            const {root, index} = MerkleTree.applyProof(account.address, proofs);

            console.log('Account', account);

            console.log('Root', '0x' + root.toString('hex'));
            console.log('Index', index);

            const contract = new this.web3Service.web3.eth.Contract(qrtokenContractArtifacts, QRTOKEN_SMART_CONTRACT_ADDRESS);
            const distribution = await contract.methods
                .distributions('0x' + root.toString('hex'))
                .call();

            console.log('distribution', distribution);
        });
    }

}
