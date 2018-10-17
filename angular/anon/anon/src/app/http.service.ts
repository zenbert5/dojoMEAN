import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { }

    addThisNote(note: string) {
        return this._http.post('/addANote', {message: note});
    }

    getMessages() {
        return this._http.get('/initialize');
    }

}
