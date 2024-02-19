import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import {
  LocalizeParser,
  LocalizeRouterModule,
  LocalizeRouterSettings,
  ManualParserLoader,
} from '@gilsdav/ngx-translate-router';
import { AVAILABLE_LANGS } from '@gv-cv/shared-util-types';
import { provideRouter, Route } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

export const provideAppRouterConfiguration = (routes: Route[]) => [
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
