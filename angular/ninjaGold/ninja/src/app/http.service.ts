import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { 
    }

    updateActivity(data: any) {
        return this._http.post('/updateActivity', data);
    }
    save(data: any) {
        return this._http.post('/saveProgress', data);
    }
    getProgress() {
        return this._http.get('/getProgress');
    }
}