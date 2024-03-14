import { provideStore } from '@ngrx/store';
import { metaReducers, reducers } from './index';
import { provideEffects } from '@ngrx/effects';
import { UI_EFFECTS, UiActions } from '@gv-cv/angular-data-access-ui';
import { CV_EFFECTS } from '@gv-cv/angular-data-access-cv';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { SEO_META_TAGS_EFFECTS } from '@gv-cv/angular-feature-seo-meta-tags';
import {
  provideRouterStore,
  ROUTER_BLOCKED_ACTIONS_LIST,
} from '@gv-cv/angular-data-access-router';

export function provideAppState() {
  return [
    provideStore(reducers, { metaReducers }),
    provideEffects(...UI_EFFECTS, ...CV_EFFECTS, ...SEO_META_TAGS_EFFECTS),
    provideRouterStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      actionsBlocklist: [
        ...ROUTER_BLOCKED_ACTIONS_LIST,
        UiActions.navigationStarted.type,
        UiActions.navigationFinished.type,
      ],
    }),
  ];
}
