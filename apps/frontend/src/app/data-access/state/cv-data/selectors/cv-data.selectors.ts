import { createSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { fromUi } from '../../ui/reducers';
import { fromCvData } from '../reducers';
import { LangCode } from '../../../../core/translations';
import { CvDataEntity } from '../models';
import { CvData } from '../../../../domain/models';

export const selectCvDataForCurrentLanguage = createSelector(
  fromUi.uiFeature.selectLang,
  fromCvData.cvDataFeature.selectEntities,
  (lang: LangCode, entities: Dictionary<CvDataEntity>): CvData | undefined =>
    entities[lang]?.data,
);
