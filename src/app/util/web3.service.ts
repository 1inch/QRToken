import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

declare let require: any;
const Web3 = require('web3');

declare let ethereum: any;
declare let window: any;

@Injectable()
export class Web3Service {

  public web3: any;

  constructor() {
    window.addEventListener('load', (event) => {
      this.bootstrapWeb3();
    });
  }

  public async bootstrapWeb3() {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (window.ethereum) {

      window.web3 = new Web3(ethereum);
      this.web3 = window.web3;

      try {
        // Request account access if needed
        await ethereum.enable();
      } catch (error) {
        // User denied account access...
        alert('Please connect Metamask to QRToken dApp!');
      }
    }
    // Legacy dapp browsers...
    else if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
    } else {
      console.log('No web3? You should consider trying MetaMask!');

      // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
      Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      this.web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws'));
    }

    console.log('yo');
  }

  getAccounts(): Observable<number> {

    return new Observable<any>(obs => {

        const scope = this;
        const callback = function () {

          scope.web3.eth.getAccounts((err, accs) => {

            // console.log('Account request', accs);

            if (err != null) {
              console.warn('There was an error fetching your accounts.');
              obs.error(err);
              obs.complete();

              return;
            }

            // Get the initial account balance so it can be displayed.
            if (accs.length === 0) {
              const error = 'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.';
              obs.error(error);
              obs.complete();

              // console.warn(error);

              return;
            }

            obs.next(accs);
            obs.complete();

          });
        };

      if (!this.web3 || (this.web3 && !this.web3['eth'])) {
        setTimeout(callback, 200);
      } else {
        callback();
      }
    });
  }
}
