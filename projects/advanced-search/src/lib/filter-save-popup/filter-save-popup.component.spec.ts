/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FilterSavePopupComponent } from './filter-save-popup.component';
import { MatSelectModule } from '@angular/material/select';

describe('FilterSavePopupComponent', () => {
  let component: FilterSavePopupComponent;
  let fixture: ComponentFixture<FilterSavePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatSelectModule],
      declarations: [ FilterSavePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSavePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});