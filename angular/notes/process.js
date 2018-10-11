
/*

1. within the express app, execute 'ng build --watch' in term to create
the 'dist' (distribution) folder with the transcompiled/minimized code
of the angular app

2. the --watch will recompile the code when it changes, e2e and src
folders are also created

// following declaration needs to be in the express declaration
app.use(express.static( __dirname + '/public/dist/public' ));

*/


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    num: number;
    randNum: number;
    str: string;
    first_name: string;

    ngOnInit() {
        this.num = 7;
        this.randNum = Math.floor((Math.random() * 2) + 1);
        this.str = 'Hello Angular Developer!';
        this.first_name = 'Alpha';
    }
}
//
<h3>Value of num is: {{ num }}</h3>
    <h3>Value of randNum is: {{ randNum }}</h3>
    <h3>{{ str }}</h3>
    <input type="text" [value] = "first_name" />

//
export class AppComponent implements OnInit {
    snacks: string[];
    loggedIn: boolean;

    ngOnInit() {
        this.snacks = ["vanilla latte with skim milk", "brushed suede", "cookie"];
        this.loggedIn = true;
    }
}

//
<p *ngIf="loggedIn">You are logged in!</p>
<p *ngFor="let snack of snacks">{{snack}}</p>
<p *ngIf="snacks.length < 3">You need more snacks.</p>

// app.components.html
<button (click)="onButtonClick()" >Click me!</button>
<button (click)="onButtonClickParam(5)">Click me!</button>
<button (click)="onButtonClickParams(5, 'hello')">Click me!</button>
<button (click)="onButtonClickEvent($event)">Click me!</button>

// app.components.ts
onButtonClick(): void { 
    console.log(`Click event is working`);
}
onButtonClickParam(num: Number): void { 
    console.log(`Click event is working with num param: ${num}`);
}
onButtonClickParams(num: Number, str: String): void { 
    console.log(`Click event is working with num param: ${num} and str param: ${str}`);
}
onButtonClickEvent(event: any): void { 
    console.log(`Click event is working with event: ${event}`);
}

// app.services.ts
postToServer(num){
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!
    return this._http.post('/tasks', num);  
}

onButtonClickParam(num: Number): void { 
    console.log(`Click event is working with num param: ${num}`);
    // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._httpService.postToServer({data: num});
    observable.subscribe(data => console.log("Got our data!", data));
}
