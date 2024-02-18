import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import {
  LocalizeParser,
  LocalizeRouterModule,
  LocalizeRouterSettings,
  ManualParserLoader,
} from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AVAILABLE_LANGS } from '@gv-cv/shared-util-types';

export function localizeLoaderFactory(
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings,
): LocalizeParser {
  return new ManualParserLoader(
    translate,
    location,
    settings,
    AVAILABLE_LANGS,
    'ROUTES',
  );
}

export const provideAppRouterConfiguration = () => [
  provideRouter(routes),
  importProvidersFrom(
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: localizeLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient],
      },
      useCachedLang: false,
    }),
  ),
];
