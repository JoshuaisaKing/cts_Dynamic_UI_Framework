import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCourseComponent } from './user_courses.component';

describe('UserCourseComponent', () => {
  let component: UserCourseComponent;
  let fixture: ComponentFixture<UserCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
