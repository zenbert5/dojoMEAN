import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { 
        this.getTasks();
        this.getTask('5bbd4091c1c35f8aadd4a2ab');
    }
    getTasks() {
        let tempObservable = this._http.get('/all');
        tempObservable.subscribe(data => console.log('Got our tasks!', data));
    }
    getTask(id: string) {
        let tempObservable = this._http.get(`/${id}`);
        tempObservable.subscribe(data => console.log('Got the task!', data));
    }
}

