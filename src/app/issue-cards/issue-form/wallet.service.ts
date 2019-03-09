import {Injectable, OnInit} from '@angular/core';
import {Web3Service} from '../../util/web3.service';

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

  getListOfTokens(): any {

    this.web3Service.accountsObservable.subscribe(addresses => {

      console.log('Account', addresses[0]);

      this.web3Service.web3.eth.getPastLogs({
        fromBlock: 6500000,
        topics: [
          this.web3Service.web3.utils.keccak256('Transfer(address,address,uint256)'),
          null,
          this.web3Service.web3.utils.padLeft(addresses[0], 64)
        ]
      })
        .then(data => {

          console.log('Data', data);
        })
        .catch(err => {
          console.error('Error', err);
        });
    });
  }
}
