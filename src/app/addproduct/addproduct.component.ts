import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { NgClass, NgFor } from '@angular/common';
import { CuttextPipe } from '../pipe/cuttext.pipe';
import { product } from '../transfare/products';
import { UpdateProductsService } from '../service/update-products.service';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [NgClass , NgFor , CuttextPipe],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css',
})
export class AddproductComponent {

constructor(private addcart:CartService , private counterService: UpdateProductsService){}
counter: number = 0;
cartsList:product[] = this.addcart.carts
ngOnInit(){


  this.counterService.getcounter()
  .subscribe((value) => (this.counter = value));
}

decreaseCounter(){
  this.counterService.changeCounter(this.counter - 1)
}

increaseCounter(){
 this.counterService.changeCounter(this.counter + 1)
}




}

