import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-sell',
    templateUrl: './sell.component.html',
    styleUrls: ['./sell.component.css']
})

export class SellComponent implements OnInit {
    flashMsg: string;
    currentVal: number;
    currentWallet: number;
    sell: number;
    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.showCoins();
    }
    showCoins() {
        const ledgerLength = this._httpService.ledger['ledger'].length - 1;
        this.currentVal = this._httpService.ledger['ledger'][ledgerLength].value;
        this.currentWallet = this._httpService.ledger['wallet'];
    }

    // sell coins
    sellCoins() {
        console.log('Submitted sell coins');
        if (this.sell > this._httpService.ledger['wallet']) {
            this.flashMsg = `You do not have ${this.sell} coins to sell!`;
            setTimeout(() => { this.flashMsg = null }, 3000);
        }
        else {
            const id = Math.floor(Math.random() * 9999) + 1;
            const ledgerLength = this._httpService.ledger['ledger'].length - 1;
            let newLedgerItem = {
                transaction_id: id,
                action: 'Sell',
                amount: this.sell,
                value: this._httpService.ledger['ledger'][ledgerLength].value - this.sell
            }
            this._httpService.ledger['ledger'].push(newLedgerItem);
            this._httpService.ledger['wallet'] -= this.sell;
            let observable = this._httpService.updateLedger();
            observable.subscribe(data => {
                console.log('Updated ledger -- response --> ', data);
            })
            this.flashMsg = `You have sold ${this.sell} coins!`;
            setTimeout(() => { this.flashMsg = null }, 3000);
            this.showCoins();
        }
    }
}
