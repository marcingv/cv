import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { PL_LANG_CODE } from '@gv-cv/shared-util-types';
import { TRANS_EN, TRANS_Pl } from '@gv-cv/angular-data-access-translations';

export class FakeTranslationsLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<object> {
    return of(lang === PL_LANG_CODE ? TRANS_Pl : TRANS_EN);
  }
}
