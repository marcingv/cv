import { reducer, initialState } from './ui.reducer';
import { Action } from '@ngrx/store';

describe('Ui Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action: Action = { type: 'unknown' };

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
