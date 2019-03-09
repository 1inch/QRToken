import {Injectable, OnInit} from '@angular/core';
import {Web3Service} from './web3.service';
import {Token} from './token';
import {QRTOKEN_SMART_CONTRACT_ADDRESS} from './qrtoken-smart-contract';
import {Observable} from 'rxjs';

declare let require: any;
const tokenbArtifacts = require('./TokenABI.json');

@Injectable({
  providedIn: 'root'
})
export class WalletService implements OnInit {

  constructor(
    private web3Service: Web3Service
  ) {
  }

  ngOnInit(): void {

  }

  // getListOfTokens(): any {
  //
  //   this.web3Service.accountsObservable.subscribe(addresses => {
  //
  //     console.log('Account', addresses[0]);
  //
  //     this.web3Service.web3.eth.getPastLogs({
  //       fromBlock: 6500000,
  //       topics: [
  //         this.web3Service.web3.utils.keccak256('Transfer(address,address,uint256)'),
  //         null,
  //         this.web3Service.web3.utils.padLeft(addresses[0], 64)
  //       ]
  //     })
  //       .then(data => {
  //
  //         console.log('Data', data);
  //       })
  //       .catch(err => {
  //         console.error('Error', err);
  //       });
  //   });
  // }

  approveToken(token: Token): Observable<any> {

    console.log('approveToken', token);

    return new Observable<any>(obs => {

      this.web3Service.getAccounts()
        .subscribe(addresses => {

          const contract = new this.web3Service.web3.eth.Contract(tokenbArtifacts, token.address);

          try {
            contract.methods
              .approve(
                QRTOKEN_SMART_CONTRACT_ADDRESS,
                this.web3Service.web3.utils.toHex(this.web3Service.web3.utils.toBN(2).pow(this.web3Service.web3.utils.toBN(255)))
              )
              .send({
                from: addresses[0]
              })
              .then(data => {
                obs.next(data);
                obs.complete();
              })
              .catch(e => {
                obs.error(e);
                obs.complete();
              });
          } catch (e) {
            console.log(e);
            // this.setStatus('Error! See log.');
          }
        });
    });
  }

  getAllowance(token: Token): Observable<Token> {

    console.log('getAllowance');

    return new Observable<any>(obs => {

      this.web3Service.getAccounts()
        .subscribe(addresses => {

          console.log('addresses', addresses);

          try {
            const contract = new this.web3Service.web3.eth.Contract(tokenbArtifacts, token.address);

            contract.methods
              .allowance(addresses[0], QRTOKEN_SMART_CONTRACT_ADDRESS)
              .call()
              .then(data => {

                console.log('getAllowance', data);
                token.allowance = data;

                obs.next(token);
                obs.complete();
              })
              .catch(e => {

                console.error('Error', e);
                obs.error(e);
                obs.complete();

                alert('An error has occurred. Try it again.');
              });

            //    console.log('Allowance: ', this.tokens[i], this.tokens[i].allowance);
          } catch (e) {
            console.log(e);
            // this.setStatus('Error getting balance; see log.');
          }
        });
    });
  }
}
