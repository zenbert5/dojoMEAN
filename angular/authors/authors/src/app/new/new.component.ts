// favorite authors - mean angular - shawn chen - codingDojo - oct 15, 2018
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
    newAuthor: string;
    flashMsg: object = {
        type: '',
        message: ''
    }
    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) { }

    ngOnInit() { 
        this.newAuthor = '';
    }

    // add author to the authors collection with validation
    addAuthor() {
        let observable = this._httpService.addAuthor(this.newAuthor);
        observable.subscribe(data => {
            console.log('Data from server --> ', data)
            if (data['name'] == 'ValidationError') {
                const msg = data['errors']['name']['message'];
                this.flashMsg['type'] = 'error'
                this.flashMsg['message'] = msg;
                console.log(this.flashMsg);
                // cannot set flash to null -- cause angular to complaint of setting null to object type **
                setTimeout(() => { this.flashMsg = { type: '', message: ''}}, 3000);
            }
            else {
                this.flashMsg['type'] = 'success';
                this.flashMsg['message'] = 'Author addded successfully!';
                // cannot set flash to null -- cause angular to complaint of setting null to object type **
                setTimeout(() => { this.flashMsg = { type: '', message: ''}}, 3000);
            }
        })
    }
}
