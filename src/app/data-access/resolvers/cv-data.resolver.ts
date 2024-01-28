import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CvDataActions } from '../state/cv-data/actions/cv-data.actions';
import { cvDataFeature } from '../state/cv-data/reducers/cv-data.reducer';
import { filter, tap } from 'rxjs';
import { CvData } from '@app/domain/models';

export const cvDataResolver: ResolveFn<CvData | undefined> = () => {
  const store: Store = inject(Store);

  return store.select(cvDataFeature.selectData).pipe(
    tap((data: CvData | undefined): void => {
      if (!data) {
        store.dispatch(CvDataActions.load());
      }
    }),
    filter((data: CvData | undefined) => !!data),
  );
};
