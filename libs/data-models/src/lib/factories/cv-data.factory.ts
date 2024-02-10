import { default as cvData } from '../data/cv-pl.json';
import { CvData } from '../cv-data';

export class CvDataFactory {
  public static createInstance(params?: Partial<CvData>): CvData {
    const model: CvData = cvData as CvData;

    return {
      ...model,
      ...(params ? params : {}),
    };
  }
}
