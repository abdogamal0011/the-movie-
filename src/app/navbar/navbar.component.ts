import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  constructor(private numberCart:CartService){ }
  numberCarts :any =  this.numberCart.numberOfCarts.length



}
