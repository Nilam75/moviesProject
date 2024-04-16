import { Component } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-book-movies',
  templateUrl: './book-movies.component.html',
  styleUrls: ['./book-movies.component.scss']
})
export class BookMoviesComponent {
  moviesData: any = [];
  selectedMovie: any;

  constructor(private apiCallService: ApiCallService) { }

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
  
  }

  bookMovie(movie: any) {
    console.log("Booking movie:", movie);
  }
}
