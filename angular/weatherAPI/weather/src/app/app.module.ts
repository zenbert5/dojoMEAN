import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { SeaComponent } from './sea/sea.component';
import { SjcComponent } from './sjc/sjc.component';
import { BurComponent } from './bur/bur.component';
import { DalComponent } from './dal/dal.component';
import { DcComponent } from './dc/dc.component';
import { ChicComponent } from './chic/chic.component';

@NgModule({
    declarations: [
        AppComponent,
        SeaComponent,
        SjcComponent,
        BurComponent,
        DalComponent,
        DcComponent,
        ChicComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule { }
