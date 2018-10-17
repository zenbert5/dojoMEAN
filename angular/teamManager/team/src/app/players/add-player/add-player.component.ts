
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-player',
    templateUrl: './add-player.component.html',
    styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
    player: object = {
        name: '',
        position: ''
    }

    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) {}

    ngOnInit() {}

    // add player method -- invoked from add player form
    addPlayer() {
        let observable = this._httpService.addAPlayer(this.player);
        console.log(`submitting a new player --> ${this.player}`);
        observable.subscribe(data => {
            console.log(`completed user registration --> ${data}`);
            this._router.navigate(['/players/list']);
        })
    }
}
