import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Shinto Coins';

    constructor(private _HttpService: HttpService) { }
    ngOnInit() {
        let observable = this._HttpService.initLedger();
        observable.subscribe(data => {
            this._HttpService.ledger = data;
            console.log(this._HttpService.ledger);
        })
    }
}