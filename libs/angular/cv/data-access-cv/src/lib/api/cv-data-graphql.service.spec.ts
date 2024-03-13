import { TestBed } from '@angular/core/testing';
import { CvDataGraphqlService } from './cv-data-graphql.service';
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

describe('CvDataGraphqlService', () => {
  let service: CvDataGraphqlService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CvDataGraphqlService);
  });

  afterEach((): void => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch cv in desired language', (): void => {
    const requestLanguage: LangCode = PL_LANG_CODE;
    const expectedRequestUrl = `/graphql`;
    const expectedResponseData: CvData = CvDataFactory.createInstance();
    let resultData;

    service
      .fetchData(requestLanguage)
      .subscribe((data: CvData) => (resultData = data));

    const request: TestRequest =
      httpTestingController.expectOne(expectedRequestUrl);
    expect(request.request.method).toEqual('POST');

    request.flush({
      data: {
        getCvByLang: expectedResponseData,
      },
    });
    httpTestingController.verify();

    expect(resultData).toEqual(expectedResponseData);
  });
});
