import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'MEAN';
    tasks: any;
    constructor(private _httpService: HttpService) { }
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit() {
        this.getTasksFromService();
    }
    getTasksFromService() {
        let observable = this._httpService.getTasks();
        observable.subscribe( data => {
            console.log("Got our tasks!", data);
            this.tasks = data;
            console.log(data);
        })
    }
    getTaskFromService(id: string) {
        let tempObservable = this._httpService.getTask(`/${id}`);
        tempObservable.subscribe( data =>  {
            console.log('Got the task!', data);
        })
    }
}
