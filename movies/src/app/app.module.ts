import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './search.pipe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionComponent } from './action/action.component';
import { BookMoviesComponent } from './book-movies/book-movies.component';
import { BookingComponent } from './booking/booking.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchPipe,
    ActionComponent,
    BookMoviesComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
