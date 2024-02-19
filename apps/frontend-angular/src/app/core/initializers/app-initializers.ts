import { appLangInitializer } from '@gv-cv/angular-feature-localized-router';
import { Provider } from '@angular/core';

export function provideAppInitializers(): Provider[] {
  return [appLangInitializer()];
}
