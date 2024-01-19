import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of, tap } from 'rxjs';
import { CvDataActions } from '../actions/cv-data.actions';
import { CvDataApiService } from '../../../api/services';
import { CvData } from '../../../../domain/models';
import { Router } from '@angular/router';

@Injectable()
export class CvDataEffects {
  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CvDataActions.load),
      switchMap(() =>
        this.api.fetchData().pipe(
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
  ) {}
}
