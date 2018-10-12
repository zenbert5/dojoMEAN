/*
*   important concept - two way binding
*
*
*/
(submit) <-- form tag for form event --> on submit trigger --> = ''
[(ngModel)]='' <-- two way binding on object referenced 

// .../app/app.module.ts
...
import { FormsModule } from '@angular/forms'; // <-- import FormsModule.
@NgModule({
    ...
    imports: [
        BrowserModule,
        FormsModule, // <-- register FormsModule with our app.
	],
    ...
})
export class AppModule { }

// html
<form (submit) = "onSubmit()" >
    < !--use the json pipe to see how newTask changes in real time-- >
    <p> {{ newTask | json }} </p>
    <input type="text" name="newTask.title" [(ngModel)] = "newTask.title" />
        <input type="text" name="newTask.description" [(ngModel)] = "newTask.description" />
            <input type="submit" value="Create Task" />
</form >

// component.ts

import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    newTask: any;
    constructor() { }

    ngOnInit() {
        this.newTask = { title: "", description: "" }
    }

    onSubmit() {
        // Code to send off the form data (this.newTask) to the Service
        // ...
        // Reset this.newTask to a new, clean object.
        this.newTask = { title: "", description: "" }
    }
}

// services.ts

addTask(newtask){
    return this._http.post('/task', newtask)
}


