import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { fromCvData } from '../cv-data/reducers';
import { fromUi } from '../ui/reducers';

export interface State {
  [fromCvData.cvDataFeatureKey]: fromCvData.State;
  [fromUi.uiFeatureKey]: fromUi.State;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  [fromCvData.cvDataFeatureKey]: fromCvData.reducer,
  [fromUi.uiFeatureKey]: fromUi.reducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
