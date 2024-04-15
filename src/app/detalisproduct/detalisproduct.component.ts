import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiDataService } from '../service/api-data.service';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-detalisproduct',
  standalone: true,
  imports: [],
  templateUrl: './detalisproduct.component.html',
  styleUrl: './detalisproduct.component.css'
})
export class DetalisproductComponent {

  productList:any=[] ;
  imageList:any=[] ;
  counter: number = 0;



  constructor(private activatedRoute: ActivatedRoute , private apiData :ApiDataService ,
     private adproduct : CartService , private router:Router  ) {}



  ngOnInit() {

    let id = this.activatedRoute.snapshot.params['id'];
    this.getMoviceById(id)


  }




  addproduct(id:any){
    this.adproduct.addcart(id);
  }




getMoviceById(id : any ){

  this.apiData.getDetalisMovi(id).subscribe(
    (movice) => {console.log( "movie",  movice);

      this.productList = movice
      console.log(this.productList)
})}


handleNavigation(id : string){

  this.router.navigate(['Images' , id])
  }

}

