import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CvDataActions } from '../state/cv-data/actions/cv-data.actions';
import { cvDataFeature } from '../state/cv-data/reducers/cv-data.reducer';
import { filter } from 'rxjs';
import { CvData } from '../../domain/models';

export const cvDataResolver: ResolveFn<CvData | undefined> = () => {
  const store: Store = inject(Store);

  store.dispatch(CvDataActions.load());

  return store
    .select(cvDataFeature.selectData)
    .pipe(filter((data: CvData | undefined) => !!data));
};
