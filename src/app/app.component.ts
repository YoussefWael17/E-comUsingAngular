import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { RegiComponent } from './regi/regi.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
// import { RegiComponent } from './regi/regi.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent , ProductsComponent , RegiComponent , LoginComponent , ProductdetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecom';
}
