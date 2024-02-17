import { Injectable } from '@nestjs/common';
import { CvData, EN_CV, PL_CV } from '@gv-cv/shared-util-types';

@Injectable()
export class CvDataService {
  public getData(lang: 'pl' | 'en'): Promise<CvData> {
    return Promise.resolve(lang === 'en' ? EN_CV : PL_CV);
  }
}
