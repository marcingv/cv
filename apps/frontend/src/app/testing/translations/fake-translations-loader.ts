import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import langPl from '../../../assets/i18n/pl.json';
import langEn from '../../../assets/i18n/en.json';
import { PL_LANG_CODE } from '@gv-cv/shared-util-types';

export class FakeTranslationsLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<object> {
    return of(lang === PL_LANG_CODE ? langPl : langEn);
  }
}
