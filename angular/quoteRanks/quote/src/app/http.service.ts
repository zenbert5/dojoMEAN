import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    currAuthor: object;

    constructor(private _http: HttpClient) { }

    addAAuthor(author: object) {
        return this._http.post('/addAuthor', author);
    }

    getAllAuthors() {
        return this._http.get('/authors');
    }

    getAuthor(id: string) {
        return this._http.get(`/author/${id}`);
    }

    addAQuote(quote: object) {
        console.log('data --> ',quote['id']);
        return this._http.post(`/addQuote/${quote['id']}`, quote['data']);
    }

    updateQuote(pkg: object) {
        return this._http.put('/updateQuote', pkg);
    }

    deleteAQuote(id: string) {
        return this._http.delete(`/deleteQuote/${id}`);
    }
}
