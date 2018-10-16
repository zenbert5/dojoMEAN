import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    ledger: object;
    constructor(private _http: HttpClient) { }

    getQuestion() {
        return this._http.get('/question');
    }

    initLedger() {
        return this._http.get('/ledger');
    }

    updateLedger() {
        return this._http.post('/update', this.ledger);
    }

    showLedger() {
        return this._http.get('/getLedger');
    }
}
