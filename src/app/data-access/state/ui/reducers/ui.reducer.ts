import { createFeature, createReducer, on } from '@ngrx/store';
import { UiActions } from '../actions/ui.actions';

export const uiFeatureKey = 'ui';

export interface State {
  lang: string;
  isNavigating: boolean;
}

export const initialState: State = {
  lang: 'pl',
  isNavigating: false,
};

export const reducer = createReducer(
  initialState,
  on(UiActions.navigationStarted, (state) => ({
    ...state,
    isNavigating: true,
  })),
  on(UiActions.navigationFinished, (state) => ({
    ...state,
    isNavigating: false,
  })),
);

export const uiFeature = createFeature({
  name: uiFeatureKey,
  reducer,
});
