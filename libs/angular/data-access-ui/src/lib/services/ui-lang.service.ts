import { inject, Injectable, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { LangCode } from '@gv-cv/shared-util-types';
import { UiActions, uiFeature } from '../+state';

@Injectable({
  providedIn: 'root',
})
export class UiLangService {
  private store: Store = inject(Store);

  public availableLangs: Signal<LangCode[]> = this.store.selectSignal(
    uiFeature.selectLanguages,
  );

  public currentLang: Signal<LangCode> = this.store.selectSignal(
    uiFeature.selectLang,
  );

  public changeLanguage(lang: LangCode): void {
    this.store.dispatch(UiActions.changeLang({ language: lang }));
  }
}
