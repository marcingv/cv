import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CvDataActions } from '../state/cv-data/actions/cv-data.actions';
import { filter, tap } from 'rxjs';
import { CvData } from '@app/domain/models';
import { CvDataSelectors } from '@app/data-access/state/cv-data/selectors';

export const cvDataResolver: ResolveFn<CvData | undefined> = () => {
  const store: Store = inject(Store);

  return store.select(CvDataSelectors.selectCvDataForCurrentLanguage).pipe(
    tap((data: CvData | undefined): void => {
      if (!data) {
        store.dispatch(CvDataActions.load());
      }
    }),
    filter((data: CvData | undefined) => !!data),
  );
};
