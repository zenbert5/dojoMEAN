/*
*   MEAN - Angular 
*   oct 13, 2018
    shawn chen
*   codingDojo
*   v1.1
*   key points -
*       1. angular object being manipuated with DOM needs to be tracked and updated (visual/template) - server may be async or synchronous in terms of update to db
*       2. type definitions is crucial as angular leverages typescript to ensure data consistency
*/

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
    authors: Array<Object>;
    flashMsg: any;

    constructor(private _httpService: HttpService) { }
    ngOnInit() {

    }

    onButtonClickAddAuthor() {
        this.addAuthor = { first_name: '', last_name: '', birthday: '', country: '' };
    }

    onButtonClickGetAuthors() {
        let observable = this._httpService.getAuthors();
        observable.subscribe(data => {
            this.authors = data as Array<Object>;
            console.log(`Got the data --> ${data}`);
        })
    }

    closeInput() {
        this.addAuthor = null;
    }

    closeInput2() {
        this.newBook = null;
    }

    // del author by identifying author's record id on mongo/db then splice
    delAuthor(id: string) {
        let observable = this._httpService.delAuthor(id);
        observable.subscribe(data => {
            console.log(`Deleted Author :: ${data}`);
            console.log(`ID to delete is --> ${id}`);
            var x;
            for (x in this.authors) {
                if (this.authors[x]['_id'] == id) {
                    this.authors.splice(x, 1);
                }
            }
            this.flashMsg = 'Author deleted!';
            setTimeout(() => { this.flashMsg = null }, 3000);
        })
    }

    // delete book from template (authors) then update server/db
    delBook(aid: string, bid: string) {
        // slice the object from the authors object array
        for (let author of this.authors) {
            for (let x in author['books']) {
                if (author['books'][x]['_id'] == bid) {
                    author['books'].splice(x, 1);
                }
            }
        }
        console.log(`authors dataset is now -> ${this.authors}`);
        let observable = this._httpService.delBook(aid, bid);
        observable.subscribe(data => {
            /* this.authors = data as Array<any>; */
            console.log(`Deleted Book :: ${data}`);
            this.flashMsg = 'Book deleted!';
            setTimeout(() => { this.flashMsg = null }, 3000);
        })
    }

    addBook(id: string) {
        this.newBook = { _id: id, title: '', year: '' };
    }

    onAddAuthor() {
        let observable = this._httpService.addToAuthor(this.addAuthor);
        observable.subscribe(data => {
            console.log(`Added Author --> ${data}`);
            this.authors.push(data);
            this.addAuthor = null;
            this.flashMsg = 'Author added!';
            setTimeout(() => { this.flashMsg = null }, 3000);
        })
    }

    // add book - update visual (template) by id author and push in book, then update server/db
    onAddBook() {
        for (let author of this.authors) {
            if (author['_id'] == this.newBook['_id']) {
                author['books'].push(this.newBook);
            }
        }
        let observable = this._httpService.addBookToAuthor(this.newBook);
        observable.subscribe(data => {
            // this.authors = data as Array<any>;
            console.log(`Added Book to Author --> ${data}`);
            this.newBook = null;
            this.flashMsg = 'Book added!';
            setTimeout(() => { this.flashMsg = null }, 3000);

        })
    }
}