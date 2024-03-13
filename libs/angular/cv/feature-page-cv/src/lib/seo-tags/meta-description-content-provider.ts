import { ResolveMetaTagValueFn } from '@gv-cv/angular-feature-seo-meta-tags';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CvDataSelectors } from '@gv-cv/angular-data-access-cv';
import { map } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { TranslationKey } from '@gv-cv/angular-util-translations';

export const metaDescriptionContentProvider: ResolveMetaTagValueFn = () => {
  const store = inject(Store);
  const translateService = inject(TranslateService);
  const key: TranslationKey = 'pageTitles.default';

  return store.select(CvDataSelectors.selectCvDataForCurrentLanguage).pipe(
    map((cv) => {
      if (!cv) {
        return translateService.instant(key);
      }

      return translateService.instant(key) + ' - ' + cv.employee.specialization;
    }),
  );
};
