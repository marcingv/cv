import { LangCode } from '../../../../core/translations';
import { CvData } from '../../../../domain/models';

export interface CvDataEntity {
  language: LangCode;
  data: CvData;
}
