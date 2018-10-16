const routes: Routes = [
    { path: 'products', component: ProductComponent, children: [
        { path: 'details/:id', component: ProductDetailComponent },
        { path: 'brand/:brand', component: BrandComponent },
        { path: 'category/:cat', component: CategoryComponent }]
    },
    { path: 'reviews', component: ReviewComponent, children: [
        { path: 'details/:id', component: ReviewDetailComponent },
        { path: 'author/:id', component: AuthorComponent },
        { path: 'all/:id', component: AllreviewsComponent }]
    }
]

<!-- notice the lack of a slash in front of 'details' -->
<!-- without the slash, details/5 will be appended to our existing route, which is /products -->
<a [routerLink] = "['details', 5]"> Go to /products/details/5 </a>  

<!-- notice the slash in front of 'products' -->
<!-- without the slash, products/details/5 would be appended to our existing route, resulting in 
reviews/products/details/5, which we would not be able to handle with our routes written as they are now -->
<a [routerLink] = "['/products', 'details', 5]"> Go to /products/details/5 </a>  

export class SaleComponent implements OnInit {
    constructor(private _route: ActivatedRoute){}
    ngOnInit(){
         // note the use of .parent
        this._route.parent.params.subscribe(params => console.log(`The parent params: ${params}`))
    }
}


import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    author: object;
    flashMsg: object = {
        type: '',
        message: ''
    }
    constructor(
        private _route: ActivatedRoute,
        private _httpService: HttpService
    ) { }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            this.getAuthor(params['id']);
            console.log(`edit call --> ${params['id']}`);
        })
    }