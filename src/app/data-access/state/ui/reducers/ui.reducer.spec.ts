import { initialState, reducer } from './ui.reducer';
import { Action } from '@ngrx/store';
import { UiActions } from '@app/data-access/state/ui/actions/ui.actions';
import { UiStateFactory } from '@app/testing/factories/state';
import { LANG_EN_CODE, LANG_PL_CODE } from '@app/core/translations';

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

      expect(state.lang).toEqual(LANG_PL_CODE);
      expect(state.languages).toContain(LANG_PL_CODE);
      expect(state.languages).toContain(LANG_EN_CODE);
      expect(state.isNavigating).toBeFalse();
    });
  });

  it('should change current language', (): void => {
    let state = reducer(undefined, { type: 'NOOP' });
    expect(state.lang).not.toEqual(LANG_EN_CODE);

    state = reducer(
      state,
      UiActions.setLangSuccess({ language: LANG_EN_CODE }),
    );

    expect(state.lang).toEqual(LANG_EN_CODE);
  });

  describe('navigation flag indicator', (): void => {
    it('should update flag during navigation', (): void => {
      let state = reducer(undefined, { type: 'NOOP' });
      expect(state.isNavigating).toBeFalse();

      state = reducer(state, UiActions.navigationStarted());
      expect(state.isNavigating).toBeTrue();

      state = reducer(state, UiActions.navigationFinished());
      expect(state.isNavigating).toBeFalse();
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
