import { TestBed } from '@angular/core/testing';
import { HomePageService } from './home-page.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  CvDataStateFactory,
  UiStateFactory,
} from '../../testing/factories/state';
import { CvData, EN_LANG_CODE, LangCode } from '@gv-cv/shared-util-types';
import { fromUi, UiActions } from '@gv-cv/angular-data-access-ui';
import { fromCvData } from '@gv-cv/angular-data-access-cv';

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

  it('should change lang and reload cv data', (): void => {
    const dispatchSpy = spyOn(store, 'dispatch');

    service.changeLanguage(EN_LANG_CODE);

    expect(dispatchSpy).toHaveBeenCalledOnceWith(
      UiActions.changeLang({
        language: EN_LANG_CODE,
      }),
    );
  });

  it('should provide available languages', (): void => {
    const langs: LangCode[] = service.availableLangs();

    expect(langs).toEqual(state[fromUi.uiFeatureKey].languages);
  });

  it('should provide current language', (): void => {
    expect(service.currentLang()).toEqual(state[fromUi.uiFeatureKey].lang);
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
