import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAppInitializers } from './initializers';
import { provideNgxTranslations } from '@gv-cv/angular-feature-translations';
import { provideAppState } from './+state';
import { provideAppRouterConfiguration } from '@gv-cv/angular-feature-localized-router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideNgxTranslations(),
    provideAppRouterConfiguration(routes),
    provideAppInitializers(),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideAppState(),
    provideAnimationsAsync(), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }),
  ],
};
