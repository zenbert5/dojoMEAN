// favorite authors - mean angular - shawn chen - codingDojo - oct 15, 2018
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    authors: any;
    
    constructor(private _HttpService: HttpService) { }

    ngOnInit() {
        this.getAuthors();
    }

    getAuthors() {
        let observable = this._HttpService.getAuthors();
        observable.subscribe(data => {
            console.log('Received author data');
            this.authors = data;
        })
    }
}
