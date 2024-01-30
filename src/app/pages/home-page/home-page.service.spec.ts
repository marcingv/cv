import { TestBed } from '@angular/core/testing';
import { HomePageService } from './home-page.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { LANG_EN_CODE, LangCode } from '@app/data-access/state/ui/models';
import { UiActions } from '@app/data-access/state/ui/actions/ui.actions';
import { fromUi } from '@app/data-access/state/ui/reducers';
import { fromCvData } from '@app/data-access/state/cv-data/reducers';
import {
  CvDataStateFactory,
  UiStateFactory,
} from '@app/testing/factories/state';
import { CvData } from '@app/domain/models';

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
    const cvData: CvData | undefined = service.cvData();

    expect(cvData).toBeTruthy();
    expect(cvData).toEqual(state[fromCvData.cvDataFeatureKey].data!);
  });
});
