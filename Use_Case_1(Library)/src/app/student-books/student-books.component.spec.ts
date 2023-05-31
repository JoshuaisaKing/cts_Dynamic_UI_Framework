import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuBooksComponent } from './student-books.component';

describe('StuBooksComponent', () => {
  let component: StuBooksComponent;
  let fixture: ComponentFixture<StuBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
