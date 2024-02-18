import { inject, Injectable, Signal } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { CvData, LangCode } from '@gv-cv/shared-util-types';
import { UiActions, uiFeature } from '@gv-cv/angular-data-access-ui';
import { CvDataSelectors } from '@gv-cv/angular-data-access-cv';

@Injectable()
export class HomePageService {
  private store: Store = inject(Store);

  public availableLangs: Signal<LangCode[]> = this.store.selectSignal(
    uiFeature.selectLanguages,
  );

  public currentLang: Signal<LangCode> = this.store.selectSignal(
    uiFeature.selectLang,
  );

  private cvDataStore$: Observable<CvData> = this.store
    .select(CvDataSelectors.selectCvDataForCurrentLanguage)
    .pipe(
      filter((data: CvData | undefined) => !!data),
      map((data: CvData | undefined) => data as CvData),
    );

  public cvData: Signal<CvData> = toSignal(this.cvDataStore$, {
    requireSync: true,
  });

  public changeLanguage(lang: LangCode): void {
    this.store.dispatch(UiActions.changeLang({ language: lang }));
  }
}
