import { Component, OnInit } from '@angular/core';
import {faArrowLeft, faUnlock} from '@fortawesome/free-solid-svg-icons';
import {WalletService} from './wallet.service';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit {

  selectedToken = '';
  cardsAmount = '';
  tokenAmount = '';
  unlockIcon = faUnlock;

  constructor(
    private walletService: WalletService
  ) { }

  ngOnInit() {

    this.walletService.getListOfTokens();
  }

}
