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
import { TranslationsTestingModule } from '@gv-cv/angular-test-translations';
import { TranslateService } from '@ngx-translate/core';
import { LangChangeEvent } from '@ngx-translate/core/lib/translate.service';
import { EventEmitter } from '@angular/core';
import spyOn = jest.spyOn;

describe('UiLangEffects', () => {
  const actions$: Subject<Action> = new Subject<Action>();
  let effects: UiLangEffects;
  let localize: Partial<LocalizeRouterService>;
  let translateService: TranslateService;
  let translateServiceLangChange$: EventEmitter<LangChangeEvent> =
    new EventEmitter<LangChangeEvent>();

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
      imports: [TranslationsTestingModule],
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

    translateService = TestBed.inject(TranslateService);
    translateServiceLangChange$ = new EventEmitter<LangChangeEvent>();
    spyOn(translateService, 'onLangChange', 'get').mockReturnValue(
      translateServiceLangChange$,
    );

    effects = TestBed.inject(UiLangEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('Set initial lang', () => {
    it('should dispatch success action', (done: jest.DoneCallback): void => {
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

          done();
        },
        error: (e) => done(e),
      });

      actions$.next(sourceAction);
    });

    it('should dispatch failure action for invalid language', (done: jest.DoneCallback): void => {
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
    it('should dispatch success action', (done: jest.DoneCallback): void => {
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

          done();
        },
        error: (e) => done(e),
      });

      actions$.next(sourceAction);
    });

    it('should dispatch failure action for invalid language', (done: jest.DoneCallback): void => {
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

          done();
        },
        error: (e) => done(e),
      });

      actions$.next(sourceAction);
    });
  });

  describe('After set lang success', () => {
    it('should update app lang', (done: jest.DoneCallback) => {
      const sourceAction = UiActions.setLangSuccess({
        language: EN_LANG_CODE,
      });

      effects.onSetLangSuccess$.pipe(first()).subscribe({
        next: () => {
          expect(localize.changeLanguage).toHaveBeenCalledWith(
            sourceAction.language,
          );

          done();
        },
        error: (e) => done(e),
      });

      actions$.next(sourceAction);
    });

    it('should not update app lang if lang is already set', (done: jest.DoneCallback) => {
      const sourceAction = UiActions.setLangSuccess({
        language: EN_LANG_CODE,
      });
      spyOn(translateService, 'currentLang', 'get').mockReturnValue(
        EN_LANG_CODE,
      );

      effects.onSetLangSuccess$.pipe(first()).subscribe({
        next: () => {
          expect(localize.changeLanguage).not.toHaveBeenCalledWith(
            sourceAction.language,
          );

          done();
        },
        error: (e) => done(e),
      });

      actions$.next(sourceAction);
    });
  });

  describe('React for external lang changes', () => {
    it('should dispatch set lang success action when language has changed from external event', (done: jest.DoneCallback) => {
      const newLang: LangCode = EN_LANG_CODE;

      effects.reactForExternalLangChanges$.pipe(first()).subscribe({
        next: (resultAction) => {
          expect(resultAction).toEqual(
            UiActions.setLangSuccess({
              language: newLang,
            }),
          );

          done();
        },
        error: (e) => done(e),
      });

      translateServiceLangChange$.next({ lang: newLang, translations: {} });
    });

    it('should not dispatch action when lang is already set', () => {
      let dispatchedAction: Action | undefined;

      const subscription = effects.reactForExternalLangChanges$.subscribe({
        next: (resultAction) => (dispatchedAction = resultAction),
        complete: () => console.warn('unsubscribed'),
      });

      translateServiceLangChange$.next({
        lang: PL_LANG_CODE,
        translations: {},
      });

      expect(dispatchedAction).toBeUndefined();
      subscription.unsubscribe();
    });
  });
});
