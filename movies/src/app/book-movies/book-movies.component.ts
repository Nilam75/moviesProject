import { Component } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-book-movies',
  templateUrl: './book-movies.component.html',
  styleUrls: ['./book-movies.component.scss']
})
export class BookMoviesComponent {
  moviesData: any = [];
  selectedMovie: any;

  constructor(private apiCallService: ApiCallService,
              private router:Router) { }

  ngOnInit() {
    this.apiCallService.getMoviesData().subscribe(
      (res: any) => {
        console.log("movies Data", res);
        this.moviesData = res.data;
      }
    );
  }

  getPosterUrl(posterPath: string, width: number = 300, height: number = 300): string {
    const basePosterUrl = 'https://image.tmdb.org/t/p/';
    const imageSize = `w${width}_and_h${height}_bestv2/`;
    return `${basePosterUrl}${imageSize}${posterPath}`;
  }

  showDetails(movie: any) {
    this.selectedMovie = movie;
    console.log("selected movies",this.selectedMovie);
    this.bookMovie(movie)
  
  }

  bookMovie(movie: any) {
    movie=this.selectedMovie
    console.log("Booking movie:", movie);
    if(movie){
      this.apiCallService.moviesBookingData.next(movie)

      this.router.navigateByUrl('/Booking')
    }else{
      alert("Movies mot Selectet>>>>>>")
    }
  }
}
