import { APP_INITIALIZER, Provider } from '@angular/core';
import { Location } from '@angular/common';
import { Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { UiActions } from '@app/data-access/state/ui/actions/ui.actions';
import { LANG_PARAM_NAME } from '@app/data-access/state/ui/models';

function initializeDefaultLang(
  location: Location,
  router: Router,
  store: Store,
): () => Observable<boolean> {
  if (location.path()) {
    const parsedUrl: UrlTree = router.parseUrl(location.path());
    const desiredLang = parsedUrl.queryParamMap.get(LANG_PARAM_NAME);

    if (desiredLang) {
      store.dispatch(UiActions.setInitialLang({ language: desiredLang }));
    }
  }

  return () => of(true);
}

export function appLangInitializer(): Provider {
  return {
    provide: APP_INITIALIZER,
    useFactory: initializeDefaultLang,
    multi: true,
    deps: [Location, Router, Store],
  };
}
