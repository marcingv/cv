import { createFeature, createReducer, on } from '@ngrx/store';
import { UiActions } from '../actions/ui.actions';
import {
  AVAILABLE_LANGS,
  DEFAULT_LANG,
  LangCode,
} from '@gv-cv/shared-util-types';
import { TranslationKey } from '@gv-cv/angular-util-translations';

export const uiFeatureKey = 'ui';

export interface State {
  lang: LangCode;
  languages: LangCode[];
  isNavigating: boolean;
  errorPageMessage: string | TranslationKey | undefined;
}

export const initialState: State = {
  lang: DEFAULT_LANG,
  languages: AVAILABLE_LANGS,
  isNavigating: false,
  errorPageMessage: undefined,
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
  on(UiActions.setLangSuccess, (state, action) => ({
    ...state,
    lang: action.language,
  })),
  on(UiActions.goToErrorPage, (state, action) => ({
    ...state,
    errorPageMessage: action.errorMessage,
  })),
  on(UiActions.clearErrorPageMessage, (state) => ({
    ...state,
    errorPageMessage: undefined,
  })),
);

export const uiFeature = createFeature({
  name: uiFeatureKey,
  reducer,
});
