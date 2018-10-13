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
    twoTask: any;
    newTask: any;
    editTask: any;
    flashMsg: any;
    taskOptions: Array<any>;

    constructor(private _httpService: HttpService) { }
    ngOnInit() {
        this.newTask = { title: "", description: "" }
        this.taskOptions = [
            { value: 'false', label: 'NOT COMPLETED' },
            { value: 'true', label: 'DONE'}
        ]
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
        console.log(`request made to fetch ${id}`);
        let tempObservable = this._httpService.getTask(`${id}`);
        tempObservable.subscribe(data => {
            this.oneTask = data;
            console.log('Got the task!', data);
        })
    }

    onButtonClickToo(id: string) {
        console.log(`request made to fetch ${id}`);
        let tempObservable = this._httpService.getTask(`${id}`);
        tempObservable.subscribe(data => {
            this.twoTask = data;
            console.log('Got the task!', data);
        })
    }

    onSubmit() {
        console.log('Request to post new task');
        let tempObservable = this._httpService.addTask(this.newTask);
        tempObservable.subscribe(data => {
            console.log(`Submitted Task ${data}`);
            this.newTask = { title: '', description: ''};
        })
    }

    onUpdate() {
        console.log('Update to existing task');
        let tempObservable = this._httpService.updateTask(this.editTask);
        tempObservable.subscribe(data => {
            console.log(`Updated Task ${data}`);
            this.editTask = null;
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

    onButtonClickDelete(id: string): void {
        console.log(`Delete request on id: ${id}`);
        let tempObservable = this._httpService.deleteTask(`${id}`);
        tempObservable.subscribe(data => {
            console.log(`Deletion response ${data}`);
            this.flashMsg = 'Document Deleted!';
        })
    }

    onButtonClickEdit(id: string) {
        console.log(`Edit request on id: ${id}`);
        let tempObservable = this._httpService.getTask(`${id}`);
        tempObservable.subscribe(data => {
            this.editTask = data;
            console.log('Got the task!', data);
        })
    }
}
