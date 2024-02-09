import { initialState, reducer } from './cv-data.reducer';
import { Action } from '@ngrx/store';
import { CvDataActions } from '@app/data-access/state/cv-data/actions/cv-data.actions';
import { CvDataStateFactory } from '@app/testing/factories/state';
import { CvDataEntity } from '@app/data-access/state/cv-data/models';

describe('CvData Reducer', () => {
  describe('initial state', () => {
    it('should be empty', () => {
      const result = reducer(undefined, { type: 'NOOP' });

      expect(result.entities).toEqual({});
      expect(result.ids).toEqual([]);
      expect(result.isLoading).toBeFalse();
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
      const cvDataEntity: CvDataEntity = CvDataStateFactory.createEntity();

      let state = CvDataStateFactory.createInstance({
        ids: [],
        entities: {},
        isLoading: true,
      });

      state = reducer(
        state,
        CvDataActions.loadSuccess({ entity: cvDataEntity }),
      );

      expect(state.ids).toEqual(CvDataStateFactory.mapToIds([cvDataEntity]));
      expect(state.entities).toEqual(
        CvDataStateFactory.createDictionary([cvDataEntity]),
      );
      expect(state.isLoading).toBeFalse();
    });

    it('should set loading to false on load failure', () => {
      let state = CvDataStateFactory.createInstance({
        isLoading: true,
      });

      expect(state.isLoading).toBeTrue();

      state = reducer(
        state,
        CvDataActions.loadFailure({
          language: 'fr',
          error: new Error('Load Error'),
        }),
      );

      expect(state.isLoading).toBeFalse();
    });
  });
});
