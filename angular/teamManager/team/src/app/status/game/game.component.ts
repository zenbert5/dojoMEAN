import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    game: number = 1;
    players: object;
    constructor(
        private _httpService: HttpService,
        private _router: Router
    ) {}

    ngOnInit() {
    }

    getPlayers() {
        let observable = this._httpService.getAllPlayers();
        observable.subscribe(data => {
            console.log(`fetched all players ${data}`);
            this.players = data;
        })
    }

    setPlaying(id: string) {}
    setNotPlaying(id: string) {}
    setUndecided(id: string) {}
}
