import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
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