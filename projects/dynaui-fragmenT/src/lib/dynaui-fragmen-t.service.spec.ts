import { TestBed } from '@angular/core/testing';

import { DynauiFragmenTService } from './dynaui-fragmen-t.service';

describe('DynauiFragmenTService', () => {
  let service: DynauiFragmenTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynauiFragmenTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
