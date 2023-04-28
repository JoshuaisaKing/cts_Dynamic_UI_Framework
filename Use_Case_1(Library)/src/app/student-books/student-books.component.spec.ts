import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBooksComponent } from './student-books.component';

describe('StudentBooksComponent', () => {
  let component: StudentBooksComponent;
  let fixture: ComponentFixture<StudentBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
