import * as fromCvData from '../reducers/cv-data.reducer';

describe('CvData Selectors', () => {
  it('should select the feature state', () => {
    const result = fromCvData.cvDataFeature.selectCvDataState({
      [fromCvData.cvDataFeatureKey]: fromCvData.initialState,
    });

    expect(result).toEqual(fromCvData.initialState);
  });
});
