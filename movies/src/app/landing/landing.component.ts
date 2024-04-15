import { Component } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  moviesData:any=[];
  findData:any=[]
  getPosterUrl(posterPath: string, width: number = 400, height: number = 600): string {
    const basePosterUrl = 'https://image.tmdb.org/t/p/';
    const imageSize = `w${width}_and_h${height}_bestv2/`; 
    return `${basePosterUrl}${imageSize}${posterPath}`;
  }
  
  
constructor(private apiCallService:ApiCallService){}

 ngOnInit() {
  this.apiCallService.getMoviesData().subscribe(
    (res: any) => {
      console.log("movies Data", res);

        this.moviesData = res.data;
       
    
    },
   
  );
}

  

  getData(){
    if (this.moviesData.length > 0) {
      this.findData= this.moviesData.forEach((element: any) => {
        
        if (element.casts) {
          console.log("Casts Data for current element:", element.casts);
        return element.casts
        } 
        
      });
    
    

    console.log("find Data", this.findData);
  }
}
}
