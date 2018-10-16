import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-buy',
    templateUrl: './buy.component.html',
    styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
    flashMsg: string;
    currentVal: number;
    currentWallet: number;
    purchase: number;
    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.showCoins();
    }
    showCoins() {
        const ledgerLength = this._httpService.ledger['ledger'].length - 1;
        this.currentVal = this._httpService.ledger['ledger'][ledgerLength].value;
        this.currentWallet = this._httpService.ledger['wallet'];
    }

    buyCoins() {
        console.log('Submitted buy coins');
        const id = Math.floor(Math.random() * 9999) + 1;
        const ledgerLength = this._httpService.ledger['ledger'].length - 1;
        let newLedgerItem = {
            transaction_id: id,
            action: 'Buy',
            amount: this.purchase,
            value: this._httpService.ledger['ledger'][ledgerLength].value + this.purchase
        }
        this._httpService.ledger['ledger'].push(newLedgerItem);
        this._httpService.ledger['wallet'] += this.purchase;
        console.log(`State of the ledger ${this._httpService.ledger}`);
        let observable = this._httpService.updateLedger();
        observable.subscribe(data => {
            console.log ('Updated ledger -- response --> ', data);
        })
        this.flashMsg = `You have made a purchase of ${this.purchase} coins!`;
        setTimeout(() => { this.flashMsg = null }, 3000);
        this.showCoins();
    }
}
