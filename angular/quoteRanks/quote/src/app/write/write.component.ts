import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-write',
    templateUrl: './write.component.html',
    styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
    author: object;
    quote: object = {
        quote: '',
        votes: 0
    }
    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) { }

    ngOnInit() {
        this.author = this._httpService.currAuthor;
    }

    addQuote() {
        let sendData = {
            id: this.author['_id'],
            data: this.quote
        }
        console.log(this._httpService.currAuthor);
        let observable = this._httpService.addAQuote(sendData);
        observable.subscribe(data => {
            console.log('successfully added the quote', data);
            this._router.navigate([`/quotes/${this.author['_id']}`]);
        })
    }
}
