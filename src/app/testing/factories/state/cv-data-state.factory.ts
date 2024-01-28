import { fromCvData } from '@app/data-access/state/cv-data/reducers';
import { CvDataFactory } from '@app/testing/factories/models';

export class CvDataStateFactory {
  public static createInstance(
    params?: Partial<fromCvData.State>,
  ): fromCvData.State {
    const state: fromCvData.State = {
      data: CvDataFactory.createInstance(),
      isLoading: false,
      isLoaded: true,
    };

    return {
      ...state,
      ...(params ?? {}),
    };
  }
}
