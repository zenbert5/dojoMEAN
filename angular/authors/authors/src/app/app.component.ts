// favorite authors - mean angular - shawn chen - codingDojo - oct 15, 2018
import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Angular Authors';

    constructor(private _HttpService: HttpService) {

    }
    ngOnInit() { }
    
}
