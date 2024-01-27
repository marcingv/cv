import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { metaReducers, reducers } from './data-access/state/reducers';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { CvDataEffects } from './data-access/state/cv-data/effects/cv-data.effects';
import {
  provideRouterStore,
  ROUTER_CANCEL,
  ROUTER_ERROR,
  ROUTER_NAVIGATED,
  ROUTER_NAVIGATION,
  ROUTER_REQUEST,
} from '@ngrx/router-store';
import { UiEffects } from './data-access/state/ui/effects/ui.effects';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideNgxTranslations } from './core/translations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideStore(reducers, { metaReducers }),
    provideEffects(UiEffects, CvDataEffects),
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
    provideNgxTranslations(),
  ],
};
