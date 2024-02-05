import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { first, of, Subject, throwError } from 'rxjs';
import { CvDataEffects } from './cv-data.effects';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CvDataApiService } from '@app/data-access/api/services';
import { fromCvData } from '@app/data-access/state/cv-data/reducers';
import { fromUi } from '@app/data-access/state/ui/reducers';
import { CvDataActions } from '@app/data-access/state/cv-data/actions/cv-data.actions';
import { CvData } from '@app/domain/models';
import { CvDataFactory } from '@app/testing/factories/models';
import {
  CvDataStateFactory,
  UiStateFactory,
} from '@app/testing/factories/state';
import { UiActions } from '@app/data-access/state/ui/actions/ui.actions';
import { LANG_EN_CODE } from '@app/core/translations';

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
