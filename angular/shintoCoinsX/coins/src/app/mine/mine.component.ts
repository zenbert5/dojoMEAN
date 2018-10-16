import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { $ } from 'protractor';

@Component({
    selector: 'app-mine',
    templateUrl: './mine.component.html',
    styleUrls: ['./mine.component.css']
})

export class MineComponent implements OnInit {
    question: object;
    answer: number;
    flashMsg: string;
    constructor(
        private _httpService: HttpService
    ) { }

    ngOnInit() {
        let observable = this._httpService.getQuestion();
        observable.subscribe(data => {
            this.question = data;
            console.log(this.question);
        })
    }

    // post user answer for mining question
    postAnswer() {
        console.log('answer submitted');
        if (this.answer == this.question['answer']) {
            console.log('User answered correctly!');
            const id = Math.floor(Math.random() * 9999) + 1;
            const ledgerLength = this._httpService.ledger['ledger'].length - 1;
            let newLedgerItem = {
                transaction_id: id,
                action: 'Mined',
                amount: 1,
                value: this._httpService.ledger['ledger'][ledgerLength].value + 1
            }
            this._httpService.ledger['ledger'].push(newLedgerItem);
            this._httpService.ledger['wallet'] += 1;
            let observable = this._httpService.updateLedger();
            observable.subscribe(data => {
                console.log('Updated ledger -- response --> ', data);
            })
            this.flashMsg = 'You have answered correctly!  You have earned 1 coin';
            setTimeout(() => { this.flashMsg = null }, 3000);
            let observable2 = this._httpService.getQuestion();
            observable2.subscribe(data => {
                this.question = data;
                console.log(this.question);
            })
        } else {
            this.flashMsg = 'You have answered poorly..  Try Googling';
            setTimeout(() => { this.flashMsg = null }, 3000);
        }
    }
}
