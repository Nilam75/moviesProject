import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchPipe } from './search.pipe'
import { FormsModule } from '@angular/forms';
import { ActionComponent } from './action/action.component';
import { BookMoviesComponent } from './book-movies/book-movies.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchPipe,
    ActionComponent,
    BookMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
