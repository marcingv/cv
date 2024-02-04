import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import langPl from '@assets/i18n/pl.json';
import langEn from '@assets/i18n/en.json';
import { LANG_PL_CODE } from '@app/core/translations';

export class FakeTranslationsLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<object> {
    return of(lang === LANG_PL_CODE ? langPl : langEn);
  }
}
