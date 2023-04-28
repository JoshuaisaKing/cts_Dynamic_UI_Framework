import { TestBed } from '@angular/core/testing';

import { StudentBooksService } from './student-books.service';

describe('StudentBooksService', () => {
  let service: StudentBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
