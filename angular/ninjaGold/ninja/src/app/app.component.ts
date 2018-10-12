import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'MEAN';
    gold: number;
    name: string;
    action: string;
    log: [];
    constructor(private _httpService: HttpService) { }
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit() {
        this.gold = 0;
    }
    onClickFarm() {
        console.log('visits farm');
        let observable = this._httpService.gotoFarm();
        observable.subscribe(data => {
            console.log('got gold ->', data);
            this.gold = data.gold;
            this.log.push(data.log);
        })
    }
}
