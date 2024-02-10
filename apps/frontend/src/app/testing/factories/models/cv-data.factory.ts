import { CvData } from '../../../domain/models';
import { default as cvData } from '../../../../assets/cv-pl.json';

export class CvDataFactory {
  public static createInstance(params?: Partial<CvData>): CvData {
    const model: CvData = cvData as CvData;

    return {
      ...model,
      ...(params ? params : {}),
    };
  }
}
