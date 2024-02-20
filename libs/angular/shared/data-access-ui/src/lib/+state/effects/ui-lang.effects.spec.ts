import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { first, Subject } from 'rxjs';
import { UiLangEffects } from './ui-lang.effects';
import { Action } from '@ngrx/store';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { provideMockStore } from '@ngrx/store/testing';
import { fromUi } from '../reducers';
import { UiActions } from '../actions/ui.actions';
import { UiStateFactory } from '../testing';
import { EN_LANG_CODE, LangCode, PL_LANG_CODE } from '@gv-cv/shared-util-types';

describe('UiLangEffects', () => {
  let effects: UiLangEffects;
  const actions$: Subject<Action> = new Subject<Action>();
  let localize: Partial<LocalizeRouterService>;

  const initialState: {
    [fromUi.uiFeatureKey]: fromUi.State;
  } = {
    [fromUi.uiFeatureKey]: UiStateFactory.createInstance({
      lang: PL_LANG_CODE,
      languages: [PL_LANG_CODE, EN_LANG_CODE],
    }),
  };

  beforeEach(() => {
    localize = {
      changeLanguage: jest.fn(),
    };

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
    it('should set lang and dispatch success action', (done: jest.DoneCallback): void => {
      const newLang: LangCode = EN_LANG_CODE;
      const sourceAction = UiActions.setInitialLang({
        language: newLang,
      });
      const expectedAction = UiActions.setLangSuccess({
        language: newLang,
      });

      effects.changeLang$.pipe(first()).subscribe({
        next: (resultAction: Action) => {
          expect(resultAction).toEqual(expectedAction);
          expect(localize.changeLanguage).toHaveBeenCalledWith(
            sourceAction.language,
          );

          done();
        },
        error: (e) => done(e),
      });

      actions$.next(sourceAction);
    });

    it('should not set lang and dispatch failure action for invalid language', (done: jest.DoneCallback): void => {
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
        error: (e) => done(e),
      });

      actions$.next(sourceAction);
    });
  });

  describe('Change lang', () => {
    it('should set lang and dispatch success action', (done: jest.DoneCallback): void => {
      const newLang: LangCode = EN_LANG_CODE;
      const sourceAction = UiActions.changeLang({
        language: newLang,
      });
      const expectedAction = UiActions.setLangSuccess({
        language: newLang,
      });

      effects.changeLang$.pipe(first()).subscribe({
        next: (resultAction: Action) => {
          expect(resultAction).toEqual(expectedAction);
          expect(localize.changeLanguage).toHaveBeenCalledWith(
            sourceAction.language,
          );

          done();
        },
        error: (e) => done(e),
      });

      actions$.next(sourceAction);
    });

    it('should not set lang and dispatch failure action for invalid language', (done: jest.DoneCallback): void => {
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
        error: (e) => done(e),
      });

      actions$.next(sourceAction);
    });
  });
});
