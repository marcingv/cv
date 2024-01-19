import { createFeature, createReducer, on } from '@ngrx/store';
import { CvDataActions } from '../actions/cv-data.actions';
import { CvData } from '../../../../domain/models';

export const cvDataFeatureKey = 'cvData';

export interface State {
  data: CvData | undefined;
  isLoading: boolean;
  isLoaded: boolean;
}

export const initialState: State = {
  data: undefined,
  isLoading: false,
  isLoaded: false,
};

export const reducer = createReducer(
  initialState,
  on(CvDataActions.load, (state) => ({ ...state, isLoading: true })),
  on(CvDataActions.loadSuccess, (state, action) => ({
    ...state,
    data: action.data,
    isLoaded: true,
    isLoading: false,
  })),
  on(CvDataActions.loadFailure, (state, action) => ({
    ...state,
    data: undefined,
    isLoaded: false,
    isLoading: false,
  })),
);

export const cvDataFeature = createFeature({
  name: cvDataFeatureKey,
  reducer,
});
