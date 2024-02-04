import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
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
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { provideNgxTranslations } from './core/translations';
import { provideAppInitializers } from '@app/core/initializers';
import {
  LocalizeParser,
  LocalizeRouterModule,
  LocalizeRouterSettings,
  ManualParserLoader,
} from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { UiLangEffects } from '@app/data-access/state/ui/effects/ui-lang.effects';

export function localizeLoaderFactory(
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings,
): LocalizeParser {
  return new ManualParserLoader(
    translate,
    location,
    settings,
    ['pl', 'en'],
    'ROUTES',
  );
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideNgxTranslations(),
    provideRouter(routes),
    importProvidersFrom(
      LocalizeRouterModule.forRoot(routes, {
        parser: {
          provide: LocalizeParser,
          useFactory: localizeLoaderFactory,
          deps: [
            TranslateService,
            Location,
            LocalizeRouterSettings,
            HttpClient,
          ],
        },
        useCachedLang: false,
      }),
    ),
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
    provideAppInitializers(),
  ],
};
