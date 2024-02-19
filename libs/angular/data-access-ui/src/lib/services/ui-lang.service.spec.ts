import { TestBed } from '@angular/core/testing';
import { UiLangService } from './ui-lang.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { EN_LANG_CODE, LangCode } from '@gv-cv/shared-util-types';
import { fromUi, UiActions, UiStateFactory } from '../+state';

describe('UiLangService', () => {
  let service: UiLangService;
  let store: MockStore;

  const state: {
    [fromUi.uiFeatureKey]: fromUi.State;
  } = {
    [fromUi.uiFeatureKey]: UiStateFactory.createInstance(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiLangService, provideMockStore()],
    });

    store = TestBed.inject(MockStore);
    store.setState(state);

    service = TestBed.inject(UiLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change lang', (): void => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    service.changeLanguage(EN_LANG_CODE);

    expect(dispatchSpy).toHaveBeenCalledWith(
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
});
