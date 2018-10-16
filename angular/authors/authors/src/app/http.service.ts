import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { }

    getAuthors() {
        return this._http.get('/authors');
    }
    addAuthor(name: string) {
        console.log('adding author -->', name);
        return this._http.post('/addAuthor', {name: name});
    }
    getAuthor(id: string) {
        return this._http.get(`/getAuthor/${id}`);
    }
    editAuthor(author: object) {
        return this._http.put('/editAuthor', author);
    }
}
