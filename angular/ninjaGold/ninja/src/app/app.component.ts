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
    log: Array<any>;

    constructor(private _httpService: HttpService) { }
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit() {
        this.gold = 0;
    }
    randNumRange(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    onClickPlace(id: number) {
        var gold = 0
        var myActivity = ""
        if (id == 1) {
            gold = this.randNumRange(2, 5);
            myActivity = `You earned ${gold} gold at farm!`;
        } else if (id == 2) {
            gold = this.randNumRange(5, 10);
            myActivity = `You earned ${gold} gold at cave!`;
        } else if (id == 3) {
            gold = this.randNumRange(7, 15);
            myActivity = `You earned ${gold} gold at house!`;
        } else {
            gold = this.randNumRange(-100, 100);
            if (gold <= 0) {
                myActivity = `You lost ${gold} gold at casino!`;
            } else {
                myActivity = `You earned ${gold} gold at casino!`;
            }
        }
        this.gold += gold;

        if (!(this.log)) {
            this.log = [];
        }
        this.log.push(myActivity);
        console.log(`--> ${this.log}`);

        let data = {
            activity: myActivity,
            gold: this.gold
        }
        let observable = this._httpService.updateActivity(data);
        observable.subscribe(x => {
            if (x['status']==false){
                // handle the error
            }
            else {
                console.log(x);
            }
        })
    }
    save() {
        let data = {
            gold: this.gold
        }
        let observable = this._httpService.save(data);
        observable.subscribe(data => {
            console.log(data);
            console.log('saved!');
        })
    }
    continue() {
        let observable = this._httpService.getProgress();
        observable.subscribe(data => {
            console.log(data);
            var actLog = [];
            for (let x in data) {
                if (data[x].activity) {
                    actLog.push(data[x].activity);
                }
            }
            this.log = actLog;
            console.log(data);
        })
    }
}
