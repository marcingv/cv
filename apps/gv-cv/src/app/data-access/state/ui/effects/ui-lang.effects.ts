import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { UiActions } from '@app/data-access/state/ui/actions/ui.actions';
import { uiFeature } from '@app/data-access/state/ui/reducers/ui.reducer';
import { withLatestFrom } from 'rxjs/operators';
import { map } from 'rxjs';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { LangCode } from '@app/core/translations';

@Injectable()
export class UiLangEffects {
  public constructor(
    private actions$: Actions,
    private store: Store,
    private localize: LocalizeRouterService,
  ) {}

  changeLang$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UiActions.changeLang, UiActions.setInitialLang),
      withLatestFrom(this.store.select(uiFeature.selectLanguages)),
      map(([action, availableLangs]) => {
        const requestedLang: LangCode = action.language;
        const isValidLang: boolean = availableLangs.includes(requestedLang);

        if (isValidLang) {
          this.localize.changeLanguage(requestedLang);

          return UiActions.setLangSuccess({
            language: requestedLang,
          });
        } else {
          return UiActions.setLangFailure({ language: requestedLang });
        }
      }),
    ),
  );
}
