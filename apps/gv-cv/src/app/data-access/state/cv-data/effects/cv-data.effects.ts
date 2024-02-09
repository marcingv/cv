import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { CvDataActions } from '../actions/cv-data.actions';
import { CvDataApiService } from '../../../api/services';
import { CvData } from '@app/domain/models';
import { Store } from '@ngrx/store';
import { uiFeature } from '../../ui/reducers/ui.reducer';
import { UiActions } from '@app/data-access/state/ui/actions/ui.actions';

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
          errorMessage: action.error.message,
        }),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private api: CvDataApiService,
    private store: Store,
  ) {}
}
