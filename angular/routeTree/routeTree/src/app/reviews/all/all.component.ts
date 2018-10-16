import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-all',
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
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