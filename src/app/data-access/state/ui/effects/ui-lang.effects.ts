import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  DEFAULT_LANG,
  LANG_PARAM_NAME,
  LangCode,
} from '@app/data-access/state/ui/models';
import { UiActions } from '@app/data-access/state/ui/actions/ui.actions';
import { uiFeature } from '@app/data-access/state/ui/reducers/ui.reducer';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import {
  concat,
  distinctUntilChanged,
  filter,
  first,
  map,
  of,
  tap,
} from 'rxjs';
import { routerSelectors } from '@app/data-access/state/router/selectors/router.selectors';

@Injectable()
export class UiLangEffects {
  public constructor(
    private actions$: Actions,
    private translateService: TranslateService,
    private router: Router,
    private store: Store,
  ) {}

  changeLang$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UiActions.changeLang, UiActions.setInitialLang),
      withLatestFrom(this.store.select(uiFeature.selectLanguages)),
      map(([action, availableLangs]) => {
        const requestedLang: LangCode = action.language;
        const isValidLang = availableLangs.includes(requestedLang);

        if (isValidLang) {
          this.translateService.use(requestedLang);

          return UiActions.setLangSuccess({
            language: requestedLang,
            skipRedirect:
              action.type === UiActions.changeLang.type
                ? action.skipRedirect
                : true,
          });
        } else {
          return UiActions.setLangFailure({ language: requestedLang });
        }
      }),
    ),
  );

  updateLangQueryParamAfterLangChange$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UiActions.setLangSuccess),
        filter((action) => !action.skipRedirect),
        withLatestFrom(
          this.store.select(routerSelectors.selectQueryParam(LANG_PARAM_NAME)),
        ),
        tap(([action, queryParamLang]) => {
          if (!queryParamLang) {
            queryParamLang = DEFAULT_LANG;
          }

          if (queryParamLang !== action.language) {
            this.updateLangUrlQueryParam(action.language);
          }
        }),
      ),
    { dispatch: false },
  );

  changeLangOnQueryParamLangChange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UiActions.navigationFinished),
      first(),
      switchMap(() =>
        this.store
          .select(routerSelectors.selectQueryParam(LANG_PARAM_NAME))
          .pipe(
            distinctUntilChanged(),
            withLatestFrom(this.store.select(uiFeature.selectLang)),
            switchMap(([queryParamLang, currentAppLang]) => {
              if (!queryParamLang) {
                queryParamLang = DEFAULT_LANG;
              }

              if (queryParamLang !== currentAppLang) {
                return of(
                  UiActions.changeLang({
                    language: queryParamLang,
                    skipRedirect: true,
                  }),
                );
              } else {
                return concat([]);
              }
            }),
          ),
      ),
    ),
  );

  removeInvalidLangFromQueryParam$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UiActions.navigationFinished),
        first(),
        switchMap(() =>
          this.store
            .select(routerSelectors.selectQueryParam(LANG_PARAM_NAME))
            .pipe(
              distinctUntilChanged(),
              withLatestFrom(
                this.store.select(uiFeature.selectLang),
                this.store.select(uiFeature.selectLanguages),
              ),
              tap(([queryParamLang, currentAppLang, availableLangs]) => {
                if (
                  queryParamLang &&
                  !availableLangs.includes(queryParamLang)
                ) {
                  this.updateLangUrlQueryParam(currentAppLang);
                }
              }),
            ),
        ),
      ),
    { dispatch: false },
  );

  private updateLangUrlQueryParam(language: LangCode): void {
    this.router.navigate([], {
      queryParams: {
        [LANG_PARAM_NAME]: language === DEFAULT_LANG ? undefined : language,
      },
      queryParamsHandling: 'merge',
    });
  }
}
