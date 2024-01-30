import { createFeature, createReducer, on } from '@ngrx/store';
import { UiActions } from '../actions/ui.actions';
import { DEFAULT_LANG, LANG_EN_CODE, LANG_PL_CODE, LangCode } from '../models';
import { TranslationKey } from '@app/core/translations';

export const uiFeatureKey = 'ui';

export interface State {
  lang: LangCode;
  languages: LangCode[];
  isNavigating: boolean;
  errorPageMessage: string | TranslationKey | undefined;
}

export const initialState: State = {
  lang: DEFAULT_LANG,
  languages: [LANG_PL_CODE, LANG_EN_CODE],
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
