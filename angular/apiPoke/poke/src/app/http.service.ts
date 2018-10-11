import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { 
        this.getPokemon();

    }
    getPokemon() {
        let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
        bulbasaur.subscribe(data => {
            var abilities = data['abilities'];
            var abilitiesUrl;
            var pokeInfo;
            // iterate each ability -- this code is reusable for any pokemon -- just change the pokemon #
            for (let x in abilities) {
                console.log('Ability: ' + abilities[x].ability.name);
                abilitiesUrl = abilities[x].ability.url;
                pokeInfo = this._http.get(abilitiesUrl);
                pokeInfo.subscribe(data => {
                    var pokes = data['pokemon'];
                    // output the number of pokemons with aiblity
                    console.log('There are ' + pokes.length + ' pokemons with this ability');
                    // console log pokemons with similar abilities
                    for (let x in pokes) {
                        console.log('Pokemon with ability -> ' + pokes[x].pokemon.name);
                    }
                })
            }
        })
    }
}

