import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';

export class FakeTranslationsLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<object> {
    return fromPromise(import(`../../../assets/i18n/${lang}.json`));
  }
}
