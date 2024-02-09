import { appLangInitializer } from './app-lang-initializer';
import { Provider } from '@angular/core';

export function provideAppInitializers(): Provider[] {
  return [appLangInitializer()];
}
