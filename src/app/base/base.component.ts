import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavigationService} from './navigation.service';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Location} from '@angular/common';
import {Web3Service} from '../util/web3.service';
import {QRTOKEN_SMART_CONTRACT_ADDRESS} from '../util/qrtoken-smart-contract';

@Component({
    selector: 'app-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

    backIcon = faArrowLeft;
    QRTOKEN_SMART_CONTRACT_ADDRESS = QRTOKEN_SMART_CONTRACT_ADDRESS;

    constructor(
        private location: Location,
        private navigationService: NavigationService,
        private route: ActivatedRoute,
        private router: Router,
        private web3Service: Web3Service
    ) {
    }

    ngOnInit() {
    }


    goBack() {
        this.router.navigate(['../']);
    }

}
