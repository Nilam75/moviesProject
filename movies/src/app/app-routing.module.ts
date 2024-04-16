import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ActionComponent } from './action/action.component';
import { BookMoviesComponent } from './book-movies/book-movies.component';

const routes: Routes = [
  {path:"",component:LandingComponent},
  {path:"action",component:ActionComponent},
  {path:"book",component:BookMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
