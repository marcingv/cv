import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateModuleConfig,
} from '@ngx-translate/core';
import { importProvidersFrom } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { DEFAULT_LANG } from '@app/data-access/state/ui/models';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const config: TranslateModuleConfig = {
  defaultLanguage: DEFAULT_LANG,
  loader: {
    provide: TranslateLoader,
    useFactory: createTranslateLoader,
    deps: [HttpClient],
  },
};

registerLocaleData(localePl);

export const provideNgxTranslations = () => [
  importProvidersFrom(TranslateModule.forRoot(config)),
  DatePipe,
];
