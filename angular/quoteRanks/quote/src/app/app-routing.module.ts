import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewComponent } from './new/new.component';
import { QuotesComponent } from './quotes/quotes.component';
import { WriteComponent } from './write/write.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'new', component: NewComponent },
    { path: 'quotes/:id', component: QuotesComponent },
    { path: 'write/:id', component: WriteComponent },
    { path: '', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
