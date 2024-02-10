import { TestBed } from '@angular/core/testing';
import { HomePageService } from './home-page.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { fromUi } from '../../data-access/state/ui/reducers';
import { fromCvData } from '../../data-access/state/cv-data/reducers';
import {
  CvDataStateFactory,
  UiStateFactory,
} from '../../testing/factories/state';
import { LANG_EN_CODE, LangCode } from '../../core/translations';
import { UiActions } from '../../data-access/state/ui/actions/ui.actions';
import { CvData } from '../../domain/models';

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

    service.changeLanguage(LANG_EN_CODE);

    expect(dispatchSpy).toHaveBeenCalledOnceWith(
      UiActions.changeLang({
        language: LANG_EN_CODE,
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
