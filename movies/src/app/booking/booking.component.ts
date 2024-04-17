import { Component } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  movieTicketForm!:FormGroup
subjectData:any;
constructor(private apiCallService:ApiCallService,
            private fb:FormBuilder
){}
  ngOnInit(){
    this.apiCallService.moviesBookingData.subscribe(res=>{
      this.subjectData=res;
      console.log("the selected data",this.subjectData);
      
    })
    this.bookingData()
  }
  bookingData(){
    this.movieTicketForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      movieTitle: ['', Validators.required],
      dateOfMovie: ['', Validators.required],
      timeOfMovie: ['', Validators.required],
      numberOfTickets: ['', [Validators.required, Validators.min(1)]],
      seatPreference: [''],
      paymentMethod: ['', Validators.required],
      totalAmountDue: ['']
    });
  }

}
