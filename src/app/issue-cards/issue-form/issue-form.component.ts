import {Component, NgZone, OnInit} from '@angular/core';
import {faThumbsUp, faUnlock} from '@fortawesome/free-solid-svg-icons';
import {WalletService} from '../../util/wallet.service';
import {Token} from '../../util/token';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit {

  selectedTokenAddress = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52';
  selectedToken: Token;
  cardsAmount = '';
  tokenAmount = '';
  unlockIcon = faUnlock;
  thumbsUpIcon = faThumbsUp;

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
    private zone: NgZone
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

        console.log('Selected token:', this.selectedToken);

        this.getAllowance(token);
      }
    }
  }

  approveToken(token: Token) {

    console.log('Approve');

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
}
