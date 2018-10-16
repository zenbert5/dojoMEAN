import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
    parameter: string;
    constructor(
        private _route: ActivatedRoute
    ) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.parameter = params['id'];
        })
    }
}