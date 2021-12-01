import { TestBed } from '@angular/core/testing';

import { DataAndTimeService } from './data-and-time.service';

describe('DataAndTimeService', () => {
  let service: DataAndTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAndTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
