import { HttpClient } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateModuleConfig,
} from '@ngx-translate/core';
import { importProvidersFrom } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { DEFAULT_LANG } from '@gv-cv/shared-util-types';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n_v2/', '.json');
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
