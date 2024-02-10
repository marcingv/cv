import { LangCode } from '../../../../core/translations';
import { CvData } from '@gv-cv/data-models';

export interface CvDataEntity {
  language: LangCode;
  data: CvData;
}
