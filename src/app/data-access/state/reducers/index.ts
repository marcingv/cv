import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { cvDataFeature } from '../cv-data/reducers/cv-data.reducer';
import { routerReducer } from '@ngrx/router-store';
import { uiFeature } from '../ui/reducers/ui.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  [cvDataFeature.name]: cvDataFeature.reducer,
  [uiFeature.name]: uiFeature.reducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
