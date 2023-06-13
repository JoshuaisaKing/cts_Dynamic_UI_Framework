import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAdvancedSearchComponent } from './advanced-search.component';

describe('NgAdvancedSearchComponent', () => {
  let component: NgAdvancedSearchComponent;
  let fixture: ComponentFixture<NgAdvancedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAdvancedSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});