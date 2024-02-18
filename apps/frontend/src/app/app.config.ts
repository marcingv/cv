import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { metaReducers, reducers } from './data-access/state/reducers';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  provideRouterStore,
  ROUTER_CANCEL,
  ROUTER_ERROR,
  ROUTER_NAVIGATED,
  ROUTER_NAVIGATION,
  ROUTER_REQUEST,
} from '@ngrx/router-store';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAppRouterConfiguration } from './core/router';
import { provideAppInitializers } from './core/initializers';
import { provideNgxTranslations } from '@gv-cv/angular-feature-translations';
import { UiEffects, UiLangEffects } from '@gv-cv/angular-data-access-ui';
import { CvDataEffects } from '@gv-cv/angular-data-access-cv';

export const appConfig: ApplicationConfig = {
  providers: [
    provideNgxTranslations(),
    provideAppRouterConfiguration(),
    provideAppInitializers(),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideStore(reducers, { metaReducers }),
    provideEffects(UiEffects, UiLangEffects, CvDataEffects),
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
  ],
};
