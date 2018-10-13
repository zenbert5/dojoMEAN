import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component'; 

@NgModule({
    declarations: [
        AppComponent,
        TaskComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule { }