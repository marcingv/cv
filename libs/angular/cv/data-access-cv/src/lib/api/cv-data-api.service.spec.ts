import { TestBed } from '@angular/core/testing';
import { CvDataApiService } from './cv-data-api.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
  TestRequest,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  CvData,
  CvDataFactory,
  LangCode,
  PL_LANG_CODE,
} from '@gv-cv/shared-util-types';

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
    const requestLanguage: LangCode = PL_LANG_CODE;
    const expectedRequestUrl = `/api/cv/${requestLanguage}`;
    const expectedResponseData: CvData = CvDataFactory.createInstance();
    let resultData;

    service
      .fetchData(requestLanguage)
      .subscribe((data: CvData) => (resultData = data));

    const request: TestRequest =
      httpTestingController.expectOne(expectedRequestUrl);
    expect(request.request.method).toEqual('GET');

    request.flush(expectedResponseData);
    httpTestingController.verify();

    expect(resultData).toEqual(expectedResponseData);
  });
});
