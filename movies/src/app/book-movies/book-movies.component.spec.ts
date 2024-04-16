import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMoviesComponent } from './book-movies.component';

describe('BookMoviesComponent', () => {
  let component: BookMoviesComponent;
  let fixture: ComponentFixture<BookMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookMoviesComponent]
    });
    fixture = TestBed.createComponent(BookMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
