import { TestBed } from '@angular/core/testing';
import { CvDataApiService } from './cv-data-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CvDataApiService', () => {
  let service: CvDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CvDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
