import { initialState, reducer } from './ui.reducer';
import { Action } from '@ngrx/store';
import { UiActions } from '../actions/ui.actions';
import { EN_LANG_CODE, PL_LANG_CODE } from '@gv-cv/shared-util-types';
import { UiStateFactory } from '../testing';

describe('Ui Reducer', (): void => {
  describe('an unknown action', (): void => {
    it('should return the previous state', (): void => {
      const action: Action = { type: 'unknown' };

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('initial state data', (): void => {
    it('should have default configuration', (): void => {
      const state = reducer(undefined, { type: 'NOOP' });

      expect(state.lang).toEqual(PL_LANG_CODE);
      expect(state.languages).toContain(PL_LANG_CODE);
      expect(state.languages).toContain(EN_LANG_CODE);
      expect(state.isNavigating).toBe(false);
    });
  });

  it('should change current language', (): void => {
    let state = reducer(undefined, { type: 'NOOP' });
    expect(state.lang).not.toEqual(EN_LANG_CODE);

    state = reducer(
      state,
      UiActions.setLangSuccess({ language: EN_LANG_CODE }),
    );

    expect(state.lang).toEqual(EN_LANG_CODE);
  });

  describe('navigation flag indicator', (): void => {
    it('should update flag during navigation', (): void => {
      let state = reducer(undefined, { type: 'NOOP' });
      expect(state.isNavigating).toBe(false);

      state = reducer(state, UiActions.navigationStarted());
      expect(state.isNavigating).toBe(true);

      state = reducer(state, UiActions.navigationFinished());
      expect(state.isNavigating).toBe(false);
    });
  });

  describe('error page message', (): void => {
    it('should save error message', (): void => {
      let state = UiStateFactory.createInstance();

      expect(state.errorPageMessage).toBeUndefined();

      state = reducer(
        state,
        UiActions.goToErrorPage({ errorMessage: 'Some error' }),
      );

      expect(state.errorPageMessage).toEqual('Some error');
    });

    it('should clear error message', (): void => {
      let state = UiStateFactory.createInstance({
        errorPageMessage: 'existing error message',
      });

      expect(state.errorPageMessage).toBeTruthy();

      state = reducer(state, UiActions.clearErrorPageMessage());

      expect(state.errorPageMessage).toBeUndefined();
    });
  });
});
