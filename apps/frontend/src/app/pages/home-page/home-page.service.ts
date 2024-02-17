import { inject, Injectable, Signal } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { uiFeature } from '../../data-access/state/ui/reducers/ui.reducer';
import { LangCode } from '../../core/translations';
import { CvDataSelectors } from '../../data-access/state/cv-data/selectors';
import { UiActions } from '../../data-access/state/ui/actions/ui.actions';
import { CvData } from '@gv-cv/shared-util-types';

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
      map((data: CvData | undefined) => data!),
    );

  public cvData: Signal<CvData> = toSignal(this.cvDataStore$, {
    requireSync: true,
  });

  public changeLanguage(lang: LangCode): void {
    this.store.dispatch(UiActions.changeLang({ language: lang }));
  }
}
