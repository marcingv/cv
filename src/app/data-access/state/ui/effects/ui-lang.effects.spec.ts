import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { first, Subject } from 'rxjs';
import { UiLangEffects } from './ui-lang.effects';
import { Action } from '@ngrx/store';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { provideMockStore } from '@ngrx/store/testing';
import { fromUi } from '@app/data-access/state/ui/reducers';
import { UiStateFactory } from '@app/testing/factories/state';
import {
  LANG_EN_CODE,
  LANG_PL_CODE,
  LangCode,
} from '@app/data-access/state/ui/models';
import { UiActions } from '@app/data-access/state/ui/actions/ui.actions';

describe('UiLangEffects', () => {
  let effects: UiLangEffects;
  const actions$: Subject<Action> = new Subject<Action>();
  let localize: jasmine.SpyObj<LocalizeRouterService>;

  const initialState: {
    [fromUi.uiFeatureKey]: fromUi.State;
  } = {
    [fromUi.uiFeatureKey]: UiStateFactory.createInstance({
      lang: LANG_PL_CODE,
      languages: [LANG_PL_CODE, LANG_EN_CODE],
    }),
  };

  beforeEach(() => {
    localize = jasmine.createSpyObj<LocalizeRouterService>(['changeLanguage']);

    TestBed.configureTestingModule({
      providers: [
        UiLangEffects,
        provideMockStore({ initialState: initialState }),
        provideMockActions(() => actions$),
        {
          provide: LocalizeRouterService,
          useValue: localize,
        },
      ],
    });

    effects = TestBed.inject(UiLangEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('Set initial lang', () => {
    it('should set lang and dispatch success action', (done: DoneFn): void => {
      const newLang: LangCode = LANG_EN_CODE;
      const sourceAction = UiActions.setInitialLang({
        language: newLang,
      });
      const expectedAction = UiActions.setLangSuccess({
        language: newLang,
      });

      effects.changeLang$.pipe(first()).subscribe({
        next: (resultAction: Action) => {
          expect(resultAction).toEqual(expectedAction);
          expect(localize.changeLanguage).toHaveBeenCalledOnceWith(
            sourceAction.language,
          );

          done();
        },
        error: () => fail(),
      });

      actions$.next(sourceAction);
    });

    it('should not set lang and dispatch failure action for invalid language', (done: DoneFn): void => {
      const newLang: LangCode = 'invalid';
      const sourceAction = UiActions.setInitialLang({
        language: newLang,
      });
      const expectedAction = UiActions.setLangFailure({
        language: newLang,
      });

      effects.changeLang$.pipe(first()).subscribe({
        next: (resultAction: Action) => {
          expect(resultAction).toEqual(expectedAction);
          expect(localize.changeLanguage).not.toHaveBeenCalled();

          done();
        },
        error: () => fail(),
      });

      actions$.next(sourceAction);
    });
  });

  describe('Change lang', () => {
    it('should set lang and dispatch success action', (done: DoneFn): void => {
      const newLang: LangCode = LANG_EN_CODE;
      const sourceAction = UiActions.changeLang({
        language: newLang,
      });
      const expectedAction = UiActions.setLangSuccess({
        language: newLang,
      });

      effects.changeLang$.pipe(first()).subscribe({
        next: (resultAction: Action) => {
          expect(resultAction).toEqual(expectedAction);
          expect(localize.changeLanguage).toHaveBeenCalledOnceWith(
            sourceAction.language,
          );

          done();
        },
        error: () => fail(),
      });

      actions$.next(sourceAction);
    });

    it('should not set lang and dispatch failure action for invalid language', (done: DoneFn): void => {
      const newLang: LangCode = 'invalid';
      const sourceAction = UiActions.changeLang({
        language: newLang,
      });
      const expectedAction = UiActions.setLangFailure({
        language: newLang,
      });

      effects.changeLang$.pipe(first()).subscribe({
        next: (resultAction: Action) => {
          expect(resultAction).toEqual(expectedAction);
          expect(localize.changeLanguage).not.toHaveBeenCalled();

          done();
        },
        error: () => fail(),
      });

      actions$.next(sourceAction);
    });
  });
});
