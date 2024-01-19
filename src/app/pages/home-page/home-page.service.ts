import { inject, Injectable, Signal } from '@angular/core';
import { CvDataApiService } from '../../data-access/api/services';
import {
  catchError,
  EMPTY,
  filter,
  map,
  Observable,
  shareReplay,
  tap,
} from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CvData } from '../../domain/models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { cvDataFeature } from '../../data-access/state/cv-data/reducers/cv-data.reducer';

@Injectable()
export class HomePageService {
  private apiService: CvDataApiService = inject(CvDataApiService);
  private router: Router = inject(Router);
  private store: Store = inject(Store);

  public cvDataStore$: Observable<CvData> = this.store
    .select(cvDataFeature.selectData)
    .pipe(
      filter((data) => !!data),
      map((data) => {
        if (!data) {
          throw new Error('Brak danych w store');
        }

        return data;
      }),
    );

  public cvDataApi$: Observable<CvData> = this.apiService.fetchData().pipe(
    tap(() => console.warn('Pobieram z API')),
    catchError((error) => {
      this.router.navigate(['/error'], {
        skipLocationChange: true,
        state: { error: error },
      });

      return EMPTY;
    }),
    shareReplay(1),
    tap(() => console.warn('Mam z share replay')),
  );

  // public cvData: Signal<CvData | undefined> = toSignal(this.cvDataApi$);
  public cvData: Signal<CvData | undefined> = toSignal(this.cvDataStore$);
}
