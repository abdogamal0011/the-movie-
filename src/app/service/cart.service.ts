import { Injectable } from '@angular/core';
import {product} from '../transfare/products';
import { ApiDataService } from './api-data.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor( private apidata:ApiDataService  ) { }
cartNumber = 0;
carts:product[] = [];
cartProduct:any;

numberOfCarts = JSON.stringify(localStorage.getItem('cart'))

addcart(id:any){
   this.apidata.getDetalisMovi(id).subscribe(
    (res) => {this.cartProduct = res
      this.carts.push(this.cartProduct);
    localStorage.setItem("cart" , JSON.stringify(this.carts) );
    alert("successfuly the add product ")
    }
    )

  }


}
