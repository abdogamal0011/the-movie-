import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { ApiDataService } from '../service/api-data.service';
import {  Router } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
import { CuttextPipe } from '../pipe/cuttext.pipe';
import { CartService } from '../service/cart.service';
import { SearchPipe } from '../pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { product } from '../transfare/products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NgClass , NgFor, SliderComponent  , SearchPipe , CuttextPipe  , FormsModule  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  anyMovice:string = ''
  ListMovices : product[] =[]  ;
  oneMovie:any =[]


  constructor(private router :Router, private allproduct :ApiDataService , private addpro:CartService ){}
  ngOnInit(){
    this.trendingData();
  }

  trendingData(){
    this.allproduct.getMoviceList().subscribe(
      (res) => {this.oneMovie = res
        this.ListMovices = this.oneMovie.results
      },
      (err) => console.log(err)
      )

    }

      handleNavigation(id : string){

      this.router.navigate(['Detalisproduct' , id])
      }
      currentRating: number = 0;


      handleDetalis(id : string){
        console.log("from parent " ,id);
      }


addproduct(id:any){
  this.addpro.addcart(id);
}


}
