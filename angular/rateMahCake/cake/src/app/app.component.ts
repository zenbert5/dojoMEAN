import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Rate Mah Cake!';
    cakes: object;
    newCake: object = {
        name: '',
        url: '',
        data: []
    }
    flashMsg: object = {
        type: '',
        messages: []
    }
    newRate: object = {
        rating: 1,
        comment: ''
    }
    showMahCake: object;
    avgRating: number;
    
    constructor(private _httpService: HttpService) { }
    ngOnInit() {
        this.getCakes();
        this.newCake = { name: '', url: '', data: [] };
    }

    getCakes() {
        let observable = this._httpService.getCakes();
        observable.subscribe(data => {
            this.cakes = data;
            console.log(`Received db data -> ${data}`);
        })
    }

    submitCake() {
        let observable = this._httpService.submitNewCake(this.newCake);
        observable.subscribe(data => {
            // valiedate data
            if (data['name'] == 'ValidationError') {
                for (let key in data['errors']) {
                    this.flashMsg['messages'].push(data['errors'][key]['message']);
                }
                this.flashMsg['type'] = 'error'
                console.log(this.flashMsg);
                // cannot set flash to null -- cause angular to complaint of setting null to object type **
                setTimeout(() => { this.flashMsg = { type: '', messages: []}}, 3000);
            }
            else {
                this.flashMsg['type'] = 'success';
                this.flashMsg['messages'].push('Product editted successfully!');
                // cannot set flash to null -- cause angular to complaint of setting null to object type **
                setTimeout(() => {
                    this.flashMsg = { type: '', messages: []};
                    this.getCakes();
                }, 3000);
                console.log(data);
            }
        })
    }

    rateCake(id: string) {
        const cake = {
            id: id,
            rating: this.newRate
        }
        let observable = this._httpService.rateOneCake(cake);
        observable.subscribe(data => {
            if (data['name'] == 'ValidationError') {
                for (let key in data['errors']) {
                    this.flashMsg['messages'].push(data['errors'][key]['message']);
                }
                this.flashMsg['type'] = 'error'
                console.log(this.flashMsg);
                // cannot set flash to null -- cause angular to complaint of setting null to object type **
                setTimeout(() => { this.flashMsg = { type: '', messages: []}}, 3000);
            }
            else {
                this.flashMsg['type'] = 'success';
                this.flashMsg['messages'].push('Rating submitted successfully!');
                // cannot set flash to null -- cause angular to complaint of setting null to object type **
                setTimeout(() => {
                    this.flashMsg = { type: '', messages: []};
                    this.getCakes();
                }, 3000);
                console.log(data);
            }
        })
    }

    showOneCake(id: string) {
        console.log('clicked!!');
        let observable = this._httpService.getOneCake(id);
        observable.subscribe(data => {
            console.log('Got the one cake');
            let ratings = 0;
            for (let i=0; i< data['data'].length; ++i){
                ratings += data['data'][i].rating;
            }
            this.avgRating = ratings / data['data'].length;
            this.showMahCake = data;
        })
    }
}
