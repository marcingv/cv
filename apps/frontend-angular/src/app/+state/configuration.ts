import { provideStore } from '@ngrx/store';
import { metaReducers, reducers } from './index';
import { provideEffects } from '@ngrx/effects';
import { UI_EFFECTS } from '@gv-cv/angular-data-access-ui';
import { CV_EFFECTS } from '@gv-cv/angular-data-access-cv';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import {
  provideRouterStore,
  ROUTER_CANCEL,
  ROUTER_ERROR,
  ROUTER_NAVIGATED,
  ROUTER_NAVIGATION,
  ROUTER_REQUEST,
} from '@ngrx/router-store';

export function provideAppState() {
  return [
    provideStore(reducers, { metaReducers }),
    provideEffects(...UI_EFFECTS, ...CV_EFFECTS),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      actionsBlocklist: [
        ROUTER_ERROR,
        ROUTER_CANCEL,
        ROUTER_NAVIGATION,
        ROUTER_NAVIGATED,
        ROUTER_REQUEST,
      ],
    }),
    provideRouterStore(),
  ];
}
