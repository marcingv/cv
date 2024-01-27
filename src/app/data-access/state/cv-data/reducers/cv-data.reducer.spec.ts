import { reducer, initialState } from './cv-data.reducer';
import { Action } from '@ngrx/store';

describe('CvData Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action: Action = { type: 'unknown' };

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
