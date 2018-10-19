import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
    author: object;
    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) { }

    ngOnInit() {
        this.author = { name: '', status: []};
    }

    addAuthor() {
        let observable = this._httpService.addAAuthor(this.author);
        observable.subscribe(data => {
            console.log(`added author ${data}`);
            this._router.navigate(['/home']);
        })
    }
}
