import { Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { RegiComponent } from './regi/regi.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

export const routes: Routes = [
    { path: 'register', component: RegiComponent },
    { path: 'login', component: LoginComponent , title:'Login' },
    { path: '', component: ProductsComponent },
    { path: 'productdetail/:id', component:   ProductdetailComponent },
    { path: '**', component:  NotfoundComponent },
];
