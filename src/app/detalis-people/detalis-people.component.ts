import { Component } from '@angular/core';
import { ApiDataService } from '../service/api-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalis-people',
  standalone: true,
  imports: [],
  templateUrl: './detalis-people.component.html',
  styleUrl: './detalis-people.component.css'
})
export class DetalisPeopleComponent {

  actordetalis:any = [];
constructor(private getdata:ApiDataService , private activatedRoute:ActivatedRoute){}

ngOnInit(){
  let id = this.activatedRoute.snapshot.params['id'];
  this.getdatafun(id)



}

getdatafun(id:any){
  this.getdata.getPersonDetalis(id).subscribe(
    (res) => {this.actordetalis = res
    console.log(this.actordetalis)}

  )
}
}
