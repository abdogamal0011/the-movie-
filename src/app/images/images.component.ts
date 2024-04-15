import { Component } from '@angular/core';
import { ApiDataService } from '../service/api-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent {
  imageList:any =[];
  constructor(private apiData:ApiDataService , private activatedRoute:ActivatedRoute){}
  ngOnInit(){
    let id = this.activatedRoute.snapshot.params['id'];
    this.showImage(id)

  }
  showImage(id : any ){
    this.apiData.getDetalisImage(id).subscribe(
      (movice) =>{this.imageList = movice;
              console.log(movice)})
  }
}


