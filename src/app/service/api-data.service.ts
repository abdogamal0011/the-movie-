import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  header:any = {
 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2EyODFkNDE5NjI0YTYxMzc5OTIxNjI5ZWUzYjNmMyIsInN1YiI6IjYzZTU4NmQ1MmZjY2VlMDA4ZmNmOWJjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PMOMNJRF6QDn78dC3B5eGg3wTQY3IoN9fxb5vrbBpTA' ,
 accept: 'application/json'
  }
  constructor(private http:HttpClient) { }

  getMoviceList(){
    return this.http.get(`https://api.themoviedb.org/3/trending/all/day?language=en-US`, {headers:this.header})
  }
  getDetalisMovi(id:any){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {headers:this.header})
  }
  getDetalisImage(id:any){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images `, {headers:this.header})
  }


 gettvMoviceList(){
    return this.http.get(`https://api.themoviedb.org/3/trending/tv/day?language=en-US`, {headers:this.header})
  }
 getPeopleMoviceList(){
    return this.http.get(`https://api.themoviedb.org/3/trending/person/day?language=en-US`, {headers:this.header})
  }
 getPersonPipular(){
    return this.http.get(`https://api.themoviedb.org/3/person/popular?language=en-US&page=1`, {headers:this.header})
  }
 getPersonDetalis(id:any){
    return this.http.get(`https://api.themoviedb.org/3/person/${id}?language=en-US`, {headers:this.header})
  }

 getTopRate(){
    return this.http.get(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`, {headers:this.header})
  }




}
