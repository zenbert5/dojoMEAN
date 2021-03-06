import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { 
    }

    getTasks(){
        return this._http.get('/all');
    }
    getTask(id: string) {
        return this._http.get(`${id}`);
    }

    getApprox(fetch: string) {
        return this._http.get(`/approx/${fetch}`);
    }

    addTask(newtask: string){
        return this._http.post('/create', newtask);
    }

    updateTask(task: string){
        return this._http.put('/edit', task);
    }

    deleteTask(id: string) {
        return this._http.delete(`/destroy/${id}`);
    }
}