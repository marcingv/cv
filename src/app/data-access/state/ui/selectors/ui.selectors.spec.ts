import * as fromUi from '../reducers/ui.reducer';
import { selectUiState } from './ui.selectors';

describe('Ui Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUiState({
      [fromUi.uiFeatureKey]: fromUi.initialState,
    });

    expect(result).toEqual(fromUi.initialState);
  });
});
