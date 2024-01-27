import { createFeature, createReducer, on } from '@ngrx/store';
import { UiActions } from '../actions/ui.actions';
import { LangCode } from '../models';

export const uiFeatureKey = 'ui';

export interface State {
  lang: LangCode;
  languages: LangCode[];
  isNavigating: boolean;
}

export const initialState: State = {
  lang: LangCode.PL,
  languages: [LangCode.PL, LangCode.EN],
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
  on(UiActions.changeLang, (state, action) => ({
    ...state,
    lang: action.language,
  })),
);

export const uiFeature = createFeature({
  name: uiFeatureKey,
  reducer,
});
