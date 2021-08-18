import { TestBed } from '@angular/core/testing';

import { BursaryService } from './bursary.service';

describe('BursaryService', () => {
  let service: BursaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BursaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
