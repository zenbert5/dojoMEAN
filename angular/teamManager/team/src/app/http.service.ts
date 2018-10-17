import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { }

    addAPlayer(player: object) {
        return this._http.post('/addPlayer', player);
    }

    getAllPlayers() {
        return this._http.get('/players');
    }
}
