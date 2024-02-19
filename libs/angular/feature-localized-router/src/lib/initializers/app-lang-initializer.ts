import { APP_INITIALIZER, Provider } from '@angular/core';
import { first, map, Observable, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { Store } from '@ngrx/store';
import { UiActions } from '@gv-cv/angular-data-access-ui';
import { LangCode } from '@gv-cv/shared-util-types';

export function initializeDefaultLang(
  store: Store,
  localize: LocalizeRouterService,
  translate: TranslateService,
): () => Observable<boolean> {
  return () =>
    localize.hooks.initialized.pipe(
      first(),
      tap((): void => {
        const currentLang: LangCode =
          translate.currentLang ?? translate.defaultLang;

        if (currentLang) {
          store.dispatch(UiActions.setInitialLang({ language: currentLang }));
        }
      }),
      map(() => true),
    );
}

export function appLangInitializer(): Provider {
  return {
    provide: APP_INITIALIZER,
    useFactory: initializeDefaultLang,
    multi: true,
    deps: [Store, LocalizeRouterService, TranslateService],
  };
}
