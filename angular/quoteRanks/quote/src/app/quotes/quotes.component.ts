import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.component.html',
    styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    quotes: Array<object>;
    author: object;

    @Output() emitAuthor = new EventEmitter();

    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            let observable = this._httpService.getAuthor(params['id']);
            observable.subscribe(data => {
                this._httpService.currAuthor = data;
                this.author = data;
                console.log(`edit call --> ${params['id']}`);
                this.quotes = data['quotes'];
                this.emitAuthor.emit(this.author);
            })
        })
    }

    thumbsUp(id: string) {
        for (let i=0; i<this.quotes.length; ++i) {
            if (this.quotes[i]['_id'] == id) {
                this.quotes[i]['votes'] += 1;
                console.log('+1 vote');
                let observable = this._httpService.updateQuote(this.quotes[i]);
                observable.subscribe(data => {
                    console.log('updated vote');
                })
            }
        }
    }

    thumbsDown(id: string) {
        for (let i=0; i<this.quotes.length; ++i) {
            if (this.quotes[i]['_id'] == id) {
                this.quotes[i]['votes'] -= 1;
                console.log('-1 vote');
                let observable = this._httpService.updateQuote(this.quotes[i]);
                observable.subscribe(data => {
                    console.log('updated vote');
                })
            }
        }
    }

    deleteQuote(id: string) {
        console.log('angular moving to delete quote');
        let observable = this._httpService.deleteAQuote(id);
        observable.subscribe(data => {
            console.log('deleted quote!', data);
            this._router.navigate(['/home']);
        })
    }
}
