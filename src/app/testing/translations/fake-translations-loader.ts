import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import langPl from '@assets/i18n/pl.json';
import langEn from '@assets/i18n/en.json';
import { LangCode } from '@app/data-access/state/ui/models';

export class FakeTranslationsLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<object> {
    return of(lang === LangCode.PL ? langPl : langEn);
  }
}
