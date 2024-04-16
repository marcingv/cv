import { createSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { fromCvData } from '../reducers';
import { CvDataEntity } from '../models';
import { CvData, LangCode } from '@gv-cv/shared-util-types';
import { fromUi } from '@gv-cv/angular-data-access-ui';

export const selectCvDataForCurrentLanguage = createSelector(
  fromUi.uiFeature.selectLang,
  fromCvData.cvDataFeature.selectEntities,
  (lang: LangCode, entities: Dictionary<CvDataEntity>): CvData | undefined =>
    entities[lang]?.data,
);

export const selectRODOConsentForCurrentLanguage = createSelector(
  selectCvDataForCurrentLanguage,
  (data: CvData | undefined) => data?.consents.RODO,
);
