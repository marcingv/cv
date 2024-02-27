import { HttpClient } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateModuleConfig,
} from '@ngx-translate/core';
import { importProvidersFrom } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { DEFAULT_LANG, EN_LANG_CODE } from '@gv-cv/shared-util-types';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { catchError, Observable, of } from 'rxjs';
import { TRANS_EN, TRANS_Pl } from '@gv-cv/angular-util-translations';

class AppTranslationsLoader extends TranslateHttpLoader {
  override getTranslation(lang: string): Observable<NonNullable<unknown>> {
    return super.getTranslation(lang).pipe(
      catchError(() => {
        return of(lang === EN_LANG_CODE ? TRANS_EN : TRANS_Pl);
      }),
    );
  }
}

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new AppTranslationsLoader(http, '/assets/i18n/', '.json');
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
