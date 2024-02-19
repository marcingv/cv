import { CvData } from '../domain';
import { PL_CV } from '../data';

export class CvDataFactory {
  public static createInstance(params?: Partial<CvData>): CvData {
    return {
      ...PL_CV,
      ...(params ? params : {}),
    };
  }
}
