import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs';
import { UiActions } from '../actions/ui.actions';
import {
  routerCancelAction,
  routerErrorAction,
  routerNavigatedAction,
  routerRequestAction,
} from '@ngrx/router-store';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Injectable()
export class UiEffects {
  navigationStarted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(routerRequestAction),
      map(() => UiActions.navigationStarted()),
    ),
  );

  navigationFinished$ = createEffect(() =>
    this.actions$.pipe(
      ofType(routerCancelAction, routerErrorAction, routerNavigatedAction),
      map(() => UiActions.navigationFinished()),
    ),
  );

  changeLang$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UiActions.changeLang),
        tap((action) => this.translateService.use(action.language)),
      ),
    { dispatch: false },
  );

  goToErrorPage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UiActions.goToErrorPage),
        tap(() => {
          this.router.navigate(['/error'], {
            skipLocationChange: true,
          });
        }),
      ),
    { dispatch: false },
  );

  public constructor(
    private actions$: Actions,
    private translateService: TranslateService,
    private router: Router,
  ) {}
}
