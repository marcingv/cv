import { TestBed } from '@angular/core/testing';
import { CvDataApiService } from './cv-data-api.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
  TestRequest,
} from '@angular/common/http/testing';
import { CvData } from '@app/domain/models';
import { CvDataFactory } from '@app/testing/factories/models';
import { LANG_PL_CODE, LangCode } from '@app/data-access/state/ui/models';
import { provideHttpClient } from '@angular/common/http';

describe('CvDataApiService', (): void => {
  let service: CvDataApiService;
  let httpTestingController: HttpTestingController;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CvDataApiService);
  });

  afterEach((): void => {
    httpTestingController.verify();
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });

  it('should fetch cv in desired language', (): void => {
    const requestLanguage: LangCode = LANG_PL_CODE;
    const expectedRequestUrl: string = `/assets/cv-${requestLanguage}.json`;
    const expectedResponseData: CvData = CvDataFactory.createInstance();

    service.fetchData(requestLanguage).subscribe((data: CvData): void => {
      expect(data).toEqual(expectedResponseData);
    });

    const request: TestRequest =
      httpTestingController.expectOne(expectedRequestUrl);
    expect(request.request.method).toEqual('GET');

    request.flush(expectedResponseData);
    httpTestingController.verify();
  });
});
