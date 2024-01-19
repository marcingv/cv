import * as fromCvData from '../reducers/cv-data.reducer';
import { selectCvDataState } from './cv-data.selectors';

describe('CvData Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCvDataState({
      [fromCvData.cvDataFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
