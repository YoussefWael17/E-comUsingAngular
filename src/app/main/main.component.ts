import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductsComponent } from '../products/products.component';
import { RegiComponent } from '../regi/regi.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  // imports: [RouterOutlet,NavbarComponent , ProductsComponent , RegiComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
