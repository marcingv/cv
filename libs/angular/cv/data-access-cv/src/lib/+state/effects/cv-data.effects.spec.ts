import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { first, of, Subject, throwError } from 'rxjs';
import { CvDataEffects } from './cv-data.effects';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { fromCvData } from '../reducers';
import { CvDataActions } from '../actions/cv-data.actions';
import { CvData, CvDataFactory, EN_LANG_CODE } from '@gv-cv/shared-util-types';
import { CvDataApiService } from '../../api/cv-data-api.service';
import {
  fromUi,
  UiActions,
  UiStateFactory,
} from '@gv-cv/angular-data-access-ui';
import { CvDataStateFactory } from '../testing';

describe('CvDataEffects', () => {
  let actions$: Subject<Action>;
  let effects: CvDataEffects;
  let api: Partial<CvDataApiService>;
  let store: MockStore;

  const state: {
    [fromUi.uiFeatureKey]: fromUi.State;
    [fromCvData.cvDataFeatureKey]: fromCvData.State;
  } = {
    [fromUi.uiFeatureKey]: UiStateFactory.createInstance(),
    [fromCvData.cvDataFeatureKey]: CvDataStateFactory.createInstance({
      isLoading: false,
    }),
  };

  beforeEach(() => {
    api = {
      fetchData: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [],
      providers: [
        CvDataEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        { provide: CvDataApiService, useValue: api },
      ],
    });

    actions$ = new Subject<Action>();
    store = TestBed.inject(MockStore);
    store.setState(state);
    effects = TestBed.inject(CvDataEffects);
  });

  it('should be created', (): void => {
    expect(effects).toBeTruthy();
  });

  describe('Load for current specified language', () => {
    it('should dispatch successful action', (done: jest.DoneCallback): void => {
      const sourceAction = CvDataActions.loadForLanguage({
        language: EN_LANG_CODE,
      });

      const fetchedCvData: CvData = CvDataFactory.createInstance();
      const fetchDataSpy = jest
        .spyOn(api, 'fetchData')
        .mockImplementation(() => of(fetchedCvData));

      effects.loadForLang$.pipe(first()).subscribe({
        next: (resultAction) => {
          expect(resultAction).toEqual(
            CvDataActions.loadSuccess({
              entity: {
                language: sourceAction.language,
                data: fetchedCvData,
              },
            }),
          );
          expect(fetchDataSpy).toHaveBeenCalledWith(sourceAction.language);

          done();
        },
        error: (e) => done(e),
      });

      actions$.next(sourceAction);
    });

    it('should dispatch failure action', (done: jest.DoneCallback): void => {
      const sourceAction = CvDataActions.loadForLanguage({
        language: EN_LANG_CODE,
      });

      const fetchError: Error = new Error('Some error');
      const fetchDataSpy = jest
        .spyOn(api, 'fetchData')
        .mockImplementation(() => throwError(() => fetchError));

      effects.loadForLang$.pipe(first()).subscribe({
        next: (resultAction) => {
          expect(resultAction).toEqual(
            CvDataActions.loadFailure({
              language: sourceAction.language,
              error: fetchError,
            }),
          );
          expect(fetchDataSpy).toHaveBeenCalledWith(sourceAction.language);

          done();
        },
        error: (e) => done(e),
      });

      actions$.next(sourceAction);
    });

    it('should dispatch go to error page action on failure', (done: jest.DoneCallback) => {
      const failureAction = CvDataActions.loadFailure({
        language: EN_LANG_CODE,
        error: new Error('Some error'),
      });

      effects.onError$.pipe(first()).subscribe({
        next: (resultAction) => {
          expect(resultAction).toEqual(
            UiActions.goToErrorPage({
              errorMessage: failureAction.error.message,
            }),
          );

          done();
        },
        error: (e) => done(e),
      });

      actions$.next(failureAction);
    });
  });

  describe('Load for current app language', () => {
    it('should load data for current app language', (done: jest.DoneCallback) => {
      const sourceAction = CvDataActions.load();

      effects.loadForCurrentLang$.pipe(first()).subscribe({
        next: (resultAction) => {
          expect(resultAction).toEqual(
            CvDataActions.loadForLanguage({
              language: state[fromUi.uiFeatureKey].lang,
            }),
          );

          done();
        },
        error: (e) => done(e),
      });

      actions$.next(sourceAction);
    });
  });
});
