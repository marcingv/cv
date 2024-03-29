import { initialState, reducer } from './cv-data.reducer';
import { Action } from '@ngrx/store';
import { CvDataActions } from '../actions/cv-data.actions';
import { CvDataEntity } from '../models';
import { CvDataStateFactory } from '../testing';

describe('CvData Reducer', () => {
  describe('initial state', () => {
    it('should be empty', () => {
      const result = reducer(undefined, { type: 'NOOP' });

      expect(result.entities).toEqual({});
      expect(result.ids).toEqual([]);
      expect(result.isLoading).toBe(false);
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

      expect(state.isLoading).toBe(false);

      state = reducer(state, CvDataActions.load());

      expect(state.isLoading).toBe(true);
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
      expect(state.isLoading).toBe(false);
    });

    it('should set loading to false on load failure', () => {
      let state = CvDataStateFactory.createInstance({
        isLoading: true,
      });

      expect(state.isLoading).toBe(true);

      state = reducer(
        state,
        CvDataActions.loadFailure({
          language: 'fr',
          error: new Error('Load Error'),
        }),
      );

      expect(state.isLoading).toBe(false);
    });
  });
});
