import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { first, Subject, take, tap } from 'rxjs';
import { UiEffects } from './ui.effects';
import { Action } from '@ngrx/store';
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
import { Router } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { UiActions } from '../actions/ui.actions';
import { TranslationsTestingModule } from '@gv-cv/angular-feature-translations';

describe('UiEffects', () => {
  let actions$: Subject<Action>;
  let effects: UiEffects;
  let router: Router;
  let localizeRouterService: Partial<LocalizeRouterService>;

  beforeEach(() => {
    localizeRouterService = {
      translateRoute: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [TranslationsTestingModule],
      providers: [
        UiEffects,
        provideMockActions(() => actions$),
        {
          provide: LocalizeRouterService,
          useValue: localizeRouterService,
        },
      ],
    });

    actions$ = new Subject<Action>();
    effects = TestBed.inject(UiEffects);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should dispatch navigation started action', (done: jest.DoneCallback) => {
    effects.navigationStarted$.pipe(first()).subscribe({
      next: (resultAction) => {
        expect(resultAction).toEqual(UiActions.navigationStarted());

        done();
      },
      error: (e) => done(e),
    });

    actions$.next(routerRequestAction({ payload: {} as RouterRequestPayload }));
  });

  it('should dispatch navigation finished action', (done: jest.DoneCallback) => {
    const sourceActions: Action[] = [
      routerCancelAction({ payload: {} as RouterCancelPayload<never> }),
      routerErrorAction({ payload: {} as RouterErrorPayload<never> }),
      routerNavigatedAction({ payload: {} as RouterNavigatedPayload<never> }),
    ];
    let numberOfReactions = 0;

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

  it('should navigate to error page on error action', (done: jest.DoneCallback): void => {
    const routeToLocalize = '/error';
    const localizedRoute = '/en/error';

    (localizeRouterService.translateRoute as jest.Mock).mockReturnValue(
      localizedRoute,
    );
    const navigateSpy = jest.spyOn(router, 'navigate');

    effects.goToErrorPage$.pipe(first()).subscribe({
      next: (): void => {
        expect(localizeRouterService.translateRoute).toHaveBeenCalledWith(
          routeToLocalize,
        );
        expect(navigateSpy).toHaveBeenCalledWith([localizedRoute], {
          skipLocationChange: true,
        });

        done();
      },
      error: (e) => done(e),
    });

    actions$.next(UiActions.goToErrorPage({ errorMessage: 'Some error' }));
  });
});
