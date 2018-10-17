import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { }
    
    getCakes() {
        return this._http.get('/cakes');
    }

    getOneCake(id: string) {
        return this._http.get(`/oneCake/${id}`);
    }

    submitNewCake(cake: object) {
        return this._http.post('/newCake', cake);
    }

    rateOneCake(cake: object) {
        return this._http.put('/addRating', cake);
    }
}
