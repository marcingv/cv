import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { first, of, Subject, throwError } from 'rxjs';
import { CvDataEffects } from './cv-data.effects';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CvDataApiService } from '../../../api/services';
import { fromUi } from '../../ui/reducers';
import { fromCvData } from '../reducers';
import {
  CvDataStateFactory,
  UiStateFactory,
} from '../../../../testing/factories/state';
import { CvDataActions } from '../actions/cv-data.actions';
import { LANG_EN_CODE } from '../../../../core/translations';
import { CvData } from '../../../../domain/models';
import { CvDataFactory } from '../../../../testing/factories/models';
import { UiActions } from '../../ui/actions/ui.actions';

describe('CvDataEffects', () => {
  let actions$: Subject<Action>;
  let effects: CvDataEffects;
  let api: jasmine.SpyObj<CvDataApiService>;
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
    api = jasmine.createSpyObj<CvDataApiService>(['fetchData']);

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
    it('should dispatch successful action', (done: DoneFn): void => {
      const sourceAction = CvDataActions.loadForLanguage({
        language: LANG_EN_CODE,
      });

      const fetchedCvData: CvData = CvDataFactory.createInstance();
      api.fetchData.and.returnValue(of(fetchedCvData));

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
          expect(api.fetchData).toHaveBeenCalledOnceWith(sourceAction.language);

          done();
        },
        error: () => fail(),
      });

      actions$.next(sourceAction);
    });

    it('should dispatch failure action', (done: DoneFn): void => {
      const sourceAction = CvDataActions.loadForLanguage({
        language: LANG_EN_CODE,
      });

      const fetchError: Error = new Error('Some error');
      api.fetchData.and.returnValue(throwError(() => fetchError));

      effects.loadForLang$.pipe(first()).subscribe({
        next: (resultAction) => {
          expect(resultAction).toEqual(
            CvDataActions.loadFailure({
              language: sourceAction.language,
              error: fetchError,
            }),
          );
          expect(api.fetchData).toHaveBeenCalledOnceWith(sourceAction.language);

          done();
        },
        error: () => fail(),
      });

      actions$.next(sourceAction);
    });

    it('should dispatch go to error page action on failure', (done: DoneFn) => {
      const failureAction = CvDataActions.loadFailure({
        language: LANG_EN_CODE,
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
        error: () => fail(),
      });

      actions$.next(failureAction);
    });
  });

  describe('Load for current app language', () => {
    it('should load data for current app language', (done: DoneFn) => {
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
        error: () => fail(),
      });

      actions$.next(sourceAction);
    });
  });
});
