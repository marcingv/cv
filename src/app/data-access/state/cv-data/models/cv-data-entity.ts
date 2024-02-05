import { LangCode } from '@app/core/translations';
import { CvData } from '@app/domain/models';

export interface CvDataEntity {
  language: LangCode;
  data: CvData;
}
