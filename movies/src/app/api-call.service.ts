import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  moviesBookingData=new Subject<any>()
  url="https://jsonfakery.com/movies/simple-paginate"
  
  constructor(private http:HttpClient) { }


  getMoviesData(){
    return this.http.get(this.url)
  }
}
