import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { 
    }
    getAuthors() {
        return this._http.get('/authors');
    }
    delAuthor(id: string) {
        return this._http.delete(`/author/${id}/delete`);
    }
    delBook(aid: string, bid: string) {
        return this._http.delete(`/deleteBook/${bid}/author/${aid}`);
    }
    addToAuthor(data: any) {
        return this._http.post('/author/create', data);
    }
    addBookToAuthor(data: any) {
        return this._http.post(`/author/${data.author}/addBook`, data);
    }
}