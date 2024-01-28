import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { first, of, Subject, tap, throwError } from 'rxjs';
import { CvDataEffects } from './cv-data.effects';
import { Action } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CvDataApiService } from '@app/data-access/api/services';
import { fromCvData } from '@app/data-access/state/cv-data/reducers';
import { fromUi } from '@app/data-access/state/ui/reducers';
import { LangCode } from '@app/data-access/state/ui/models';
import { CvDataActions } from '@app/data-access/state/cv-data/actions/cv-data.actions';
import { CvData } from '@app/domain/models';
import { CvDataFactory } from '@app/testing/factories/models';
import { Router } from '@angular/router';

describe('CvDataEffects', () => {
  let actions$: Subject<Action>;
  let effects: CvDataEffects;
  let api: jasmine.SpyObj<CvDataApiService>;
  let store: MockStore;
  let router: Router;
  const state: {
    [fromUi.uiFeatureKey]: fromUi.State;
    [fromCvData.cvDataFeatureKey]: fromCvData.State;
  } = {
    [fromUi.uiFeatureKey]: {
      lang: LangCode.PL,
      languages: [LangCode.PL, LangCode.EN],
      isNavigating: false,
    },
    [fromCvData.cvDataFeatureKey]: {
      data: undefined,
      isLoaded: false,
      isLoading: false,
    },
  };

  beforeEach(() => {
    api = jasmine.createSpyObj<CvDataApiService>(['fetchData']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        CvDataEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        { provide: CvDataApiService, useValue: api },
      ],
    });

    actions$ = new Subject<Action>();
    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
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
          expect(api.fetchData).toHaveBeenCalledOnceWith(LangCode.PL);

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
          expect(api.fetchData).toHaveBeenCalledOnceWith(LangCode.PL);

          done();
        }),
      )
      .subscribe();

    actions$.next(CvDataActions.load());
  });

  it('should redirect user to error page on failure', (done: DoneFn) => {
    const failureAction = CvDataActions.loadFailure({
      error: new Error('Some error'),
    });
    const navigateSpy = spyOn(router, 'navigate');

    effects.onError$
      .pipe(
        first(),
        tap(() => {
          expect(navigateSpy).toHaveBeenCalledOnceWith(['/error'], {
            skipLocationChange: true,
            state: { error: failureAction.error },
          });

          done();
        }),
      )
      .subscribe();

    actions$.next(failureAction);
  });
});
