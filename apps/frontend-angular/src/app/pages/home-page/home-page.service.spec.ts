import { TestBed } from '@angular/core/testing';
import { HomePageService } from './home-page.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CvData, LangCode } from '@gv-cv/shared-util-types';
import { fromUi, UiStateFactory } from '@gv-cv/angular-data-access-ui';
import { CvDataStateFactory, fromCvData } from '@gv-cv/angular-data-access-cv';

describe('HomePageService', (): void => {
  let service: HomePageService;
  let store: MockStore;

  const state: {
    [fromUi.uiFeatureKey]: fromUi.State;
    [fromCvData.cvDataFeatureKey]: fromCvData.State;
  } = {
    [fromUi.uiFeatureKey]: UiStateFactory.createInstance(),
    [fromCvData.cvDataFeatureKey]: CvDataStateFactory.createInstance(),
  };

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [HomePageService, provideMockStore()],
    });

    store = TestBed.inject(MockStore);
    store.setState(state);

    service = TestBed.inject(HomePageService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });

  it('should provide cv data', (): void => {
    const cvData: CvData | undefined = service.cvData() as CvData | undefined;

    const lang: LangCode = state[fromUi.uiFeatureKey].lang;

    expect(cvData).toBeTruthy();
    expect(cvData).toEqual(
      state[fromCvData.cvDataFeatureKey].entities[lang]?.data,
    );
  });
});
