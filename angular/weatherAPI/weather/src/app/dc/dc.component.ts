import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-dc',
    templateUrl: './dc.component.html',
    styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
    weather: object;
    constructor(private _http: HttpClient) { }

    ngOnInit() {
        let observable = this._http.get('https://api.openweathermap.org/data/2.5/weather?q=tysons+corner&APPID=2d04477c8f79c4d2eecae9c063122ec9');
        observable.subscribe(data => {
            console.log(`fetched data --> ${data}`);
            data['main'].temp = Math.ceil((data['main'].temp - 273.15));
            data['main'].temp_min = Math.ceil((data['main'].temp_min - 273.15));
            data['main'].temp_max = Math.ceil((data['main'].temp_max - 273.15));
            this.weather = data;
        });
    }
}