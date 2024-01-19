import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCvData from '../reducers/cv-data.reducer';

export const selectCvDataState = createFeatureSelector<fromCvData.State>(
  fromCvData.cvDataFeatureKey,
);
