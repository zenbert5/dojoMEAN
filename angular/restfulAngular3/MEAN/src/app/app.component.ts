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
    oneTask: any;
    constructor(private _httpService: HttpService) { }
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit() {
        // this.getTasksFromService();
    }
    onButtonClick(): void { 
        console.log('request made to fetch tasks');
        let observable = this._httpService.getTasks();
        observable.subscribe(data => {
            console.log("Got our tasks!", data);
            this.tasks = data;
            console.log(data);
        })
    }
    onButtonClickItem(id: string): void {
        console.log('request made to fetch ' + id);
        let tempObservable = this._httpService.getTask(`/${id}`);
        tempObservable.subscribe(data => {
            this.oneTask = data;
            console.log('Got the task!', data);
        })
    }

    onKeyUp(event: any): void {
        let fetch = event.target.value; 
        console.log(fetch);
        let approxObservable = this._httpService.getApprox(`${fetch}`);
        approxObservable.subscribe(data => {
            this.oneTask = data;
            console.log('Matching -->', data);
        })
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
        let tempObservable = this._httpService.getTask(`${id}`);
        tempObservable.subscribe( data =>  {
            console.log('Got the task!', data);
        })
    }

/*     onButtonClickParam(num: Number): void { 
        console.log(`Click event is working with num param: ${num}`);
        // call the service's method to post the data, but make sure the data is bundled up in an object!
        let observable = this._httpService.postToServer({data: num});
        observable.subscribe(data => console.log("Got our data!", data));
    } */
}
