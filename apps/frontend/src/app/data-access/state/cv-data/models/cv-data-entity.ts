import { LangCode } from '../../../../core/translations';
import { CvData } from '@gv-cv/shared-util-types';

export interface CvDataEntity {
  language: LangCode;
  data: CvData;
}
