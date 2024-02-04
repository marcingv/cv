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
import { LANG_EN_CODE, LANG_PL_CODE, LangCode } from './types/lang-code';

export const DEFAULT_LANG: LangCode = LANG_PL_CODE;
export const AVAILABLE_LANGS: LangCode[] = [LANG_PL_CODE, LANG_EN_CODE];

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
