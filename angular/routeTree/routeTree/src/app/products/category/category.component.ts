import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
    parameter: string;
    constructor(
        private _route: ActivatedRoute
    ) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.parameter = params['cat'];
        })
    }
}