import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'MEAN';
    tasks: any;
    author: any;
    addAuthor: {};
    newBook: any;
    authors: any;
    flashMsg: any;

    constructor(private _httpService: HttpService) { }
    ngOnInit() {

    }
    onButtonClickAddAuthor() {
        this.addAuthor = { first_name: '', last_name: '', birthday: '',  country: '' };
    }
    onButtonClickGetAuthors() {
        let observable = this._httpService.getAuthors();
        observable.subscribe(data => {
            this.authors = data;
            console.log(`Got the data --> ${data}`);
        })
    }
    closeInput() {
        this.addAuthor = null;
    }
    closeInput2() {
        this.newBook = null;
    }
    delAuthor(id: string) {
        let observable = this._httpService.delAuthor(id);
        observable.subscribe(data => {
            this.authors = data;
            console.log(`Deleted Author :: ${data}`);
        })
    }
    delBook(aid: string, bid: string) {
        let observable = this._httpService.delBook(aid, bid);
        observable.subscribe(data => {
            this.authors = data;
            console.log(`Deleted Book :: ${data}`);
        })
    }
    addBook(id: string) {
        this.newBook = { author: id, title: '', year: ''};
    }
    onAddAuthor() {
        let observable = this._httpService.addToAuthor(this.addAuthor);
        observable.subscribe(data => {
            this.authors = data;
            console.log(`Added Author --> ${data}`);
        })
    }
    onAddBook() {
        let observable = this._httpService.addBookToAuthor(this.newBook);
        observable.subscribe(data => {
            this.authors = data;
            console.log(`Added Book to Author --> ${data}`);
        })
    }
}