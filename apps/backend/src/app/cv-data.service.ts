import { Injectable } from '@nestjs/common';
import { CvData, EN_CV, PL_CV } from '@gv-cv/data-models';

@Injectable()
export class CvDataService {
  getData(lang: 'pl' | 'en'): CvData {
    return lang === 'en' ? EN_CV : PL_CV;
  }
}
