import { initialState, reducer } from './cv-data.reducer';
import { Action } from '@ngrx/store';
import { CvDataActions } from '@app/data-access/state/cv-data/actions/cv-data.actions';
import { CvDataStateFactory } from '@app/testing/factories/state';
import { CvData } from '@app/domain/models';
import { CvDataFactory } from '@app/testing/factories/models';

describe('CvData Reducer', () => {
  describe('initial state', () => {
    it('should be empty', () => {
      const result = reducer(undefined, { type: 'NOOP' });

      expect(result.data).toBeUndefined();
      expect(result.isLoading).toBeFalse();
      expect(result.isLoaded).toBeFalse();
    });
  });

  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action: Action = { type: 'unknown' };

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('data loading', () => {
    it('should set isLoading flag', () => {
      let state = CvDataStateFactory.createInstance({
        isLoading: false,
      });

      expect(state.isLoading).toBeFalse();

      state = reducer(state, CvDataActions.load());

      expect(state.isLoading).toBeTrue();
    });

    it('should save data after load', () => {
      const cvData: CvData = CvDataFactory.createInstance();

      let state = CvDataStateFactory.createInstance({
        data: undefined,
        isLoaded: false,
        isLoading: true,
      });

      state = reducer(state, CvDataActions.loadSuccess({ data: cvData }));

      expect(state.data).toEqual(cvData);
      expect(state.isLoaded).toBeTrue();
      expect(state.isLoading).toBeFalse();
    });

    it('should clear data on load failure', () => {
      let state = CvDataStateFactory.createInstance();

      expect(state.data).not.toBeUndefined();
      expect(state.isLoaded).toBeTrue();

      state = reducer(
        state,
        CvDataActions.loadFailure({ error: new Error('Load Error') }),
      );

      expect(state.data).toBeUndefined();
      expect(state.isLoaded).toBeFalse();
    });
  });
});
