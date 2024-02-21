import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { CvDataActions } from '../actions/cv-data.actions';
import { Store } from '@ngrx/store';
import { CvData } from '@gv-cv/shared-util-types';
import { CvDataApiService } from '../../api';
import { UiActions, uiFeature } from '@gv-cv/angular-data-access-ui';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CvDataEffects {
  loadForCurrentLang$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CvDataActions.load),
      withLatestFrom(this.store.select(uiFeature.selectLang)),
      map(([, lang]) => CvDataActions.loadForLanguage({ language: lang })),
    );
  });

  loadForLang$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CvDataActions.loadForLanguage),
      switchMap((action) =>
        this.api.fetchData(action.language).pipe(
          map((data: CvData) =>
            CvDataActions.loadSuccess({
              entity: { language: action.language, data: data },
            }),
          ),
          catchError((error) =>
            of(
              CvDataActions.loadFailure({
                language: action.language,
                error: error,
              }),
            ),
          ),
        ),
      ),
    ),
  );

  onError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CvDataActions.loadFailure),
      map((action) =>
        UiActions.goToErrorPage({
          errorMessage: this.extractServerErrorMessage(action.error),
        }),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private api: CvDataApiService,
    private store: Store,
  ) {}

  private extractServerErrorMessage(e: Error) {
    if (e instanceof HttpErrorResponse) {
      if (
        e.error &&
        'message' in e.error &&
        e.error.message &&
        typeof e.error.message === 'string'
      ) {
        return e.error.message;
      }
    }

    return e.message;
  }
}
