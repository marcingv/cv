import { createSelector } from '@ngrx/store';
import { fromUi } from '@app/data-access/state/ui/reducers';
import { fromCvData } from '@app/data-access/state/cv-data/reducers';
import { CvData } from '@app/domain/models';
import { LangCode } from '@app/core/translations';
import { Dictionary } from '@ngrx/entity';
import { CvDataEntity } from '@app/data-access/state/cv-data/models';

export const selectCvDataForCurrentLanguage = createSelector(
  fromUi.uiFeature.selectLang,
  fromCvData.cvDataFeature.selectEntities,
  (lang: LangCode, entities: Dictionary<CvDataEntity>): CvData | undefined =>
    entities[lang]?.data,
);
