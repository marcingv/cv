import { TestBed } from '@angular/core/testing';

import { CvDataApiService } from './cv-data-api.service';

describe('CvDataApiService', () => {
  let service: CvDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
