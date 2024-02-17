import { CvData } from '../cv-data';
import { PL_CV } from '../data/pl-cv';

export class CvDataFactory {
  public static createInstance(params?: Partial<CvData>): CvData {
    return {
      ...PL_CV,
      ...(params ? params : {}),
    };
  }
}
