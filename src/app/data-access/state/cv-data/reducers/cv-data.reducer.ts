import { createFeature, createReducer, on } from '@ngrx/store';
import { CvDataActions } from '../actions/cv-data.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { CvDataEntity } from '@app/data-access/state/cv-data/models';

export const cvDataFeatureKey = 'cvData';

export interface State extends EntityState<CvDataEntity> {
  isLoading: boolean;
}

const adapter: EntityAdapter<CvDataEntity> = createEntityAdapter<CvDataEntity>({
  selectId: (model: CvDataEntity) => model.language,
});

export const initialState: State = adapter.getInitialState({
  isLoading: false,
});

export const reducer = createReducer(
  initialState,
  on(CvDataActions.load, (state) => ({ ...state, isLoading: true })),
  on(CvDataActions.loadSuccess, (state, action) => {
    return adapter.upsertOne(action.entity, {
      ...state,
      isLoading: false,
    });
  }),
  on(CvDataActions.loadFailure, (state) => ({
    ...state,
    isLoading: false,
  })),
);

const feature = createFeature({
  name: cvDataFeatureKey,
  reducer: reducer,
});

export const cvDataFeature = {
  ...feature,
  ...adapter.getSelectors(feature.selectCvDataState),
};
