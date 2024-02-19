import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAppInitializers } from './core/initializers';
import { provideNgxTranslations } from '@gv-cv/angular-feature-translations';
import { provideAppState } from './+state';
import { provideAppRouterConfiguration } from '@gv-cv/angular-feature-localized-router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideNgxTranslations(),
    provideAppRouterConfiguration(routes),
    provideAppInitializers(),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideAppState(),
  ],
};
