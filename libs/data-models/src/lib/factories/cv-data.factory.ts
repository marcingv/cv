import { default as cvData } from '../../../../../apps/frontend/src/assets/cv-pl.json';
import { CvData } from '@gv-cv/data-models';

export class CvDataFactory {
  public static createInstance(params?: Partial<CvData>): CvData {
    const model: CvData = cvData as CvData;

    return {
      ...model,
      ...(params ? params : {}),
    };
  }
}
