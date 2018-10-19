import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    author: object;

    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
    }

}
