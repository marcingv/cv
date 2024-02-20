import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs';
import { CvData } from '@gv-cv/shared-util-types';
import { CvDataActions, CvDataSelectors } from '../+state';

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
