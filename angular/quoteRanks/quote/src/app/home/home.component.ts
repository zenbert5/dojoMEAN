import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    authors: object;
    constructor(
        private _httpService: HttpService
    ) { }

    ngOnInit() {
        this.getAuthors();
    }

    getAuthors() {
        let observable = this._httpService.getAllAuthors();
        observable.subscribe(data => {
            console.log(`fetched all authors ${data}`);
            this.authors = data;
        })
    }
}
