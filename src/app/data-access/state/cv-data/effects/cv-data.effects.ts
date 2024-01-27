import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of, tap } from 'rxjs';
import { CvDataActions } from '../actions/cv-data.actions';
import { CvDataApiService } from '../../../api/services';
import { CvData } from '../../../../domain/models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UiActions } from '../../ui/actions/ui.actions';
import { uiFeature } from '../../ui/reducers/ui.reducer';

@Injectable()
export class CvDataEffects {
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CvDataActions.load),
      withLatestFrom(this.store.select(uiFeature.selectLang)),
      switchMap(([action, lang]) =>
        this.api.fetchData(lang).pipe(
          map((data: CvData) => CvDataActions.loadSuccess({ data })),
          catchError((error) => of(CvDataActions.loadFailure({ error }))),
        ),
      ),
    );
  });

  onError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CvDataActions.loadFailure),
        tap((action) => {
          console.error('error', action);
          this.router.navigate(['/error'], {
            skipLocationChange: true,
            state: { error: action.error },
          });
        }),
      ),
    { dispatch: false },
  );

  constructor(
    private actions$: Actions,
    private api: CvDataApiService,
    private router: Router,
    private store: Store,
  ) {}
}
