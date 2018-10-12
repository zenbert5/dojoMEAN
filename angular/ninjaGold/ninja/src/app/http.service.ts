import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { 
    }

    gotoFarm(){
        return this._http.get('/farm');
    }
   /*  getTask(id: string) {
        return this._http.get(`${id}`);
    }
    getApprox(fetch: string) {
        return this._http.get(`/approx/${fetch}`);
    } */
}