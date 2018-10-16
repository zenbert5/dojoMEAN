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
    flashMsg: object = {
        type: '',
        message: ''
    }
    constructor(
        private _route: ActivatedRoute,
        private _httpService: HttpService
    ) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.getAuthor(params['id']);
            console.log(`edit call --> ${params['id']}`);
        })
    }
    getAuthor(id: string) {
        let observable = this._httpService.getAuthor(id);
        observable.subscribe(data => {
            console.log(data);
            this.author = data;
        })
    }

    editAuthor() {
        let observable = this._httpService.editAuthor(this.author);
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
                this.flashMsg['message'] = 'Author updated successfully!';
                // cannot set flash to null -- cause angular to complaint of setting null to object type **
                setTimeout(() => { this.flashMsg = { type: '', message: ''}}, 3000);
            }
        })
    }
}
