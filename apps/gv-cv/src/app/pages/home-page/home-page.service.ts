import { inject, Injectable, Signal } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CvData } from '@app/domain/models';
import { Store } from '@ngrx/store';
import { uiFeature } from '@app/data-access/state/ui/reducers/ui.reducer';
import { UiActions } from '@app/data-access/state/ui/actions/ui.actions';
import { LangCode } from '@app/core/translations';
import { CvDataSelectors } from '@app/data-access/state/cv-data/selectors';

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
