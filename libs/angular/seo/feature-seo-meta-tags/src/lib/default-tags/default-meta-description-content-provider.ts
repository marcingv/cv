import { ResolveMetaTagValueFn } from '../models';
import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationKey } from '@gv-cv/angular-util-translations';

export const defaultMetaDescriptionContentProvider: ResolveMetaTagValueFn =
  () => {
    const translateService = inject(TranslateService);
    const key: TranslationKey = 'pageTitles.default';

    return translateService.instant(key);
  };
