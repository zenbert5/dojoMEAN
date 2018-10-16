import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductsDetailsComponent } from './products/details/details.component';
import { BrandComponent } from './products/brand/brand.component';
import { CategoryComponent } from './products/category/category.component';
import { AuthorComponent } from './reviews/author/author.component';
import { AllComponent } from './reviews/all/all.component';
import { DetailsComponent } from './reviews/details/details.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductsComponent,
        ReviewsComponent,
        ProductsDetailsComponent,
        BrandComponent,
        CategoryComponent,
        AuthorComponent,
        AllComponent,
        DetailsComponent
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
