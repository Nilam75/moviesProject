import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  url="https://jsonfakery.com/movies/simple-paginate"
  
  constructor(private http:HttpClient) { }


  getMoviesData(){
    return this.http.get(this.url)
  }
}
