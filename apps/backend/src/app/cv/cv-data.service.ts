import { Injectable } from '@nestjs/common';
import { CvData, EN_CV, PL_CV } from '@gv-cv/data-models';

@Injectable()
export class CvDataService {
  public getData(lang: 'pl' | 'en'): Promise<CvData> {
    console.warn('hit');
    return Promise.resolve(lang === 'en' ? EN_CV : PL_CV);
  }
}
