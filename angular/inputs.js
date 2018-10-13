
<h1>Restful Tasks API</h1>
    <button (click) = "getTasksFromService()" > Get all tasks</button >
        <div * ngFor="let task of tasks" >
            <p>{{ task.title }}</p>
            <button (click) = "taskToShow(task)" > Show</button >  < !--In this example, the taskToShow method is saving the selected task as selectedTask -->
</div >
< !--Nest the task component and bind its taskToShow to the selectedTask in the root component-- >
    <app-task * ngIf="selectedTask"[taskToShow] = "selectedTask" ></app - task > 

import { Component, OnInit, Input } from '@angular/core'; // add Input to our imports
@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    stylesUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    @Input() taskToShow: any;  // use the @Input decorator to indicate this comes from the parent
    constructor() { }
    ngOninit() { }
}

<h6>{{ taskToShow.title }}</h6>
    <p>{{ taskToShow.description }}</p>