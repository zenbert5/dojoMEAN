import { SeaComponent } from './sea/sea.component';
import { SjcComponent } from './sjc/sjc.component';
import { BurComponent } from './bur/bur.component';
import { DalComponent } from './dal/dal.component';
import { DcComponent } from './dc/dc.component';
import { ChicComponent } from './chic/chic.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'sjc',component: SjcComponent },
    { path: 'sea',component: SeaComponent },
    { path: 'bur',component: BurComponent },
    { path: 'dal',component: DalComponent },
    { path: 'dc',component: DcComponent },
    { path: 'chic',component: ChicComponent },
    // redirect to /alpha if there is nothing in the url
    { path: '', pathMatch: 'full', redirectTo: '/sjc' },
    // the ** will catch anything that did not match any of the above routes
    { path: '**', component: SjcComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
