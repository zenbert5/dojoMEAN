import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-browse',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.component.css']
})

export class BrowseComponent implements OnInit {
    flashMsg: string;
    showLedger: object;
    detail: object;
    constructor(private _httpService: HttpService) { }

    ngOnInit() {
        this.showLedger = this._httpService.ledger['ledger'];
        this.detail = null;
    }
    ledgerDetail(id: number) {
        console.log(this.showLedger[id]);
        this.detail = this.showLedger[id];
    }
}
