import { initialState, reducer } from './ui.reducer';
import { Action } from '@ngrx/store';
import { LangCode } from '@app/data-access/state/ui/models';
import { UiActions } from '@app/data-access/state/ui/actions/ui.actions';

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

      expect(state.lang).toEqual(LangCode.PL);
      expect(state.languages).toContain(LangCode.PL);
      expect(state.languages).toContain(LangCode.EN);
      expect(state.isNavigating).toBeFalse();
    });
  });

  it('should change current language', (): void => {
    let state = reducer(undefined, { type: 'NOOP' });
    expect(state.lang).not.toEqual(LangCode.EN);

    state = reducer(state, UiActions.changeLang({ language: LangCode.EN }));

    expect(state.lang).toEqual(LangCode.EN);
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
});
