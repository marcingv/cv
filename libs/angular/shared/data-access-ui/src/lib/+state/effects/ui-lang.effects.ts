import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, filter, withLatestFrom } from 'rxjs/operators';
import { map, tap } from 'rxjs';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { UiActions } from '../actions/ui.actions';
import { uiFeature } from '../reducers';
import { LangCode } from '@gv-cv/shared-util-types';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class UiLangEffects {
  public constructor(
    private actions$: Actions,
    private store: Store,
    private localize: LocalizeRouterService,
    private translateService: TranslateService,
  ) {}

  changeLang$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UiActions.changeLang, UiActions.setInitialLang),
      withLatestFrom(this.store.select(uiFeature.selectLanguages)),
      map(([action, availableLangs]) => {
        const requestedLang: LangCode = action.language;
        const isValidLang: boolean = availableLangs.includes(requestedLang);

        if (isValidLang) {
          return UiActions.setLangSuccess({
            language: requestedLang,
          });
        } else {
          return UiActions.setLangFailure({ language: requestedLang });
        }
      }),
    ),
  );

  onSetLangSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UiActions.setLangSuccess),
        tap((action) => {
          if (action.language !== this.translateService.currentLang) {
            this.localize.changeLanguage(action.language);
          }
        }),
      ),
    { dispatch: false },
  );

  reactForExternalLangChanges$ = createEffect(() =>
    this.translateService.onLangChange.pipe(
      distinctUntilChanged(),
      withLatestFrom(this.store.select(uiFeature.selectLang)),
      filter(([event, currLang]) => currLang !== event.lang),
      map(([event]) => UiActions.setLangSuccess({ language: event.lang })),
    ),
  );
}
