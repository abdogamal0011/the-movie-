import { Component } from '@angular/core';
import { ApiDataService } from '../service/api-data.service';
import { NgFor } from '@angular/common';
import { product } from '../transfare/products';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgFor , CarouselModule  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  cartegory : any;
  allBrand :product[] =[];
constructor(private apiData :ApiDataService){}


ngOnInit(){
  this.trendingData()


}
trendingData(){
  this.apiData.getMoviceList().subscribe(
    (res) => {this.cartegory = res;
              this.allBrand = this.cartegory.products

            },
    (err) => console.log(err)
    )}



    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: true
    }
}
