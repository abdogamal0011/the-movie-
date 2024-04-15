import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateProductsService {
  private counter = new BehaviorSubject<number>(0);

  constructor() { }

getcounter(){

  return this.counter.asObservable();

}
changeCounter(newCounter : number){
  // this.counter = newCounter XXXXXX WRONG
  this.counter.next(newCounter)
}







}
