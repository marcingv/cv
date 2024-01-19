import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { UiActions } from '../actions/ui.actions';
import {
  routerCancelAction,
  routerErrorAction,
  routerNavigatedAction,
  routerRequestAction,
} from '@ngrx/router-store';

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

  constructor(private actions$: Actions) {}
}
