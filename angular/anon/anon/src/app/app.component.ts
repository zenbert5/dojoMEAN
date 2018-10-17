import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'anon';
    note = '';
    messages: object;
    constructor(private _httpService: HttpService) {}

    ngOnInit() {
        this.getBoard();
    }
    addNote() {
        console.log(`saving ${this.note} to the database`);
        let observable = this._httpService.addThisNote(this.note);
        observable.subscribe(data => {
            console.log(`successfully added message -> ${data}`);
            this.getBoard()
        })
    }

    getBoard() {
        let observable = this._httpService.getMessages();
        observable.subscribe(data => {
            console.log(`successfully updated board messages -> ${data}`);
            this.messages = data;
        })
    }
}
