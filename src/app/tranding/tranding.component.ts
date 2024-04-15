import { Component } from '@angular/core';
import { ApiDataService } from '../service/api-data.service';
import { People } from '../transfare/people';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-tranding',
  standalone: true,
  imports: [],
  templateUrl: './tranding.component.html',
  styleUrl: './tranding.component.css'
})
export class TrandingComponent {
  constructor(private getApi:ApiDataService , private router:Router){}
  listPeople:People[]=[];
  people:any;
ngOnInit(){

  this.getApi.getPeopleMoviceList().subscribe(
    (res) =>{
      this.people=res
      this.listPeople=this.people.results
      

    })
}
handleNavigation(id : string){

  this.router.navigate(['detalisPeple' , id])
  }
}
