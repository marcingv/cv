import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { first, Subject, take, tap } from 'rxjs';
import { UiEffects } from './ui.effects';
import { Action } from '@ngrx/store';
import { TranslationsTestingModule } from '@app/testing/translations';
import {
  routerCancelAction,
  routerErrorAction,
  routerNavigatedAction,
  routerRequestAction,
} from '@ngrx/router-store';
import {
  RouterCancelPayload,
  RouterErrorPayload,
  RouterNavigatedPayload,
  RouterRequestPayload,
} from '@ngrx/router-store/src/actions';
import { UiActions } from '@app/data-access/state/ui/actions/ui.actions';
import { Router } from '@angular/router';

describe('UiEffects', () => {
  let actions$: Subject<Action>;
  let effects: UiEffects;
  // let translateService: TranslateService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslationsTestingModule],
      providers: [UiEffects, provideMockActions(() => actions$)],
    });

    actions$ = new Subject<Action>();
    // translateService = TestBed.inject(TranslateService);
    effects = TestBed.inject(UiEffects);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should dispatch navigation started action', (done: DoneFn) => {
    effects.navigationStarted$
      .pipe(
        first(),
        tap((resultAction) => {
          expect(resultAction).toEqual(UiActions.navigationStarted());

          done();
        }),
      )
      .subscribe();

    actions$.next(routerRequestAction({ payload: {} as RouterRequestPayload }));
  });

  it('should dispatch navigation finished action', (done: DoneFn) => {
    const sourceActions: Action[] = [
      routerCancelAction({ payload: {} as RouterCancelPayload<never> }),
      routerErrorAction({ payload: {} as RouterErrorPayload<never> }),
      routerNavigatedAction({ payload: {} as RouterNavigatedPayload<never> }),
    ];
    let numberOfReactions: number = 0;

    effects.navigationFinished$
      .pipe(
        take(sourceActions.length),
        tap((resultAction) => {
          expect(resultAction).toEqual(UiActions.navigationFinished());
          numberOfReactions++;

          if (numberOfReactions === sourceActions.length) {
            done();
          }
        }),
      )

      .subscribe();

    sourceActions.forEach((oneAction: Action) => actions$.next(oneAction));
  });

  // it('should change application language', (done: DoneFn) => {
  //   const changeLangSpy = spyOn(translateService, 'use');
  //   const sourceAction = UiActions.changeLang({ language: LangCode.EN });
  //
  //   effects.changeLang$
  //     .pipe(
  //       first(),
  //       tap(() => {
  //         expect(changeLangSpy).toHaveBeenCalledOnceWith(sourceAction.language);
  //
  //         done();
  //       }),
  //     )
  //     .subscribe();
  //
  //   actions$.next(sourceAction);
  // });

  it('should navigate to error page on error action', (done: DoneFn): void => {
    const navigateSpy = spyOn(router, 'navigate');

    effects.goToErrorPage$.pipe(first()).subscribe({
      next: (): void => {
        expect(navigateSpy).toHaveBeenCalledOnceWith(['/error'], {
          skipLocationChange: true,
        });

        done();
      },
      error: () => fail(),
    });

    actions$.next(UiActions.goToErrorPage({ errorMessage: 'Some error' }));
  });
});
