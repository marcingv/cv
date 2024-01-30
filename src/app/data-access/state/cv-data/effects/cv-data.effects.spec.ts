import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { first, of, Subject, tap, throwError } from 'rxjs';
import { CvDataEffects } from './cv-data.effects';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CvDataApiService } from '@app/data-access/api/services';
import { fromCvData } from '@app/data-access/state/cv-data/reducers';
import { fromUi } from '@app/data-access/state/ui/reducers';
import { LANG_PL_CODE } from '@app/data-access/state/ui/models';
import { CvDataActions } from '@app/data-access/state/cv-data/actions/cv-data.actions';
import { CvData } from '@app/domain/models';
import { CvDataFactory } from '@app/testing/factories/models';
import {
  CvDataStateFactory,
  UiStateFactory,
} from '@app/testing/factories/state';
import { UiActions } from '@app/data-access/state/ui/actions/ui.actions';

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
      data: undefined,
      isLoaded: false,
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

  it('should dispatch successful action', (done: DoneFn): void => {
    const fetchedCvData: CvData = CvDataFactory.createInstance();
    api.fetchData.and.returnValue(of(fetchedCvData));

    effects.load$
      .pipe(
        first(),
        tap((resultAction) => {
          expect(resultAction).toEqual(
            CvDataActions.loadSuccess({ data: fetchedCvData }),
          );
          expect(api.fetchData).toHaveBeenCalledOnceWith(LANG_PL_CODE);

          done();
        }),
      )
      .subscribe();

    actions$.next(CvDataActions.load());
  });

  it('should dispatch failure action', (done: DoneFn): void => {
    const fetchError: Error = new Error('Some error');
    api.fetchData.and.returnValue(throwError(() => fetchError));

    effects.load$
      .pipe(
        first(),
        tap((resultAction) => {
          expect(resultAction).toEqual(
            CvDataActions.loadFailure({ error: fetchError }),
          );
          expect(api.fetchData).toHaveBeenCalledOnceWith(LANG_PL_CODE);

          done();
        }),
      )
      .subscribe();

    actions$.next(CvDataActions.load());
  });

  it('should dispatch go to error page action on failure', (done: DoneFn) => {
    const failureAction = CvDataActions.loadFailure({
      error: new Error('Some error'),
    });

    effects.onError$
      .pipe(
        first(),
        tap((resultAction) => {
          expect(resultAction).toEqual(
            UiActions.goToErrorPage({
              errorMessage: failureAction.error.message,
            }),
          );

          done();
        }),
      )
      .subscribe();

    actions$.next(failureAction);
  });
});
