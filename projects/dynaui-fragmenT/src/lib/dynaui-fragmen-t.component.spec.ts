import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynauiFragmenTComponent } from './dynaui-fragmen-t.component';

describe('DynauiFragmenTComponent', () => {
  let component: DynauiFragmenTComponent;
  let fixture: ComponentFixture<DynauiFragmenTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynauiFragmenTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynauiFragmenTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
