import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-brand',
    templateUrl: './brand.component.html',
    styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
    parameter: string;
    constructor(
        private _route: ActivatedRoute
    ) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.parameter = params['brand'];
        })
    }
}