import { TestBed } from '@angular/core/testing';

import { NewyorkService } from './newyork.service';

describe('NewyorkService', () => {
  let service: NewyorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewyorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
