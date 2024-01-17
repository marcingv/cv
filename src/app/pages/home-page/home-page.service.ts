import { inject, Injectable, Signal } from '@angular/core';
import { CvDataApiService } from '../../data-access/api/services';
import { catchError, EMPTY, Observable, shareReplay, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CvData } from '../../domain/models';
import { Router } from '@angular/router';

@Injectable()
export class HomePageService {
  private apiService: CvDataApiService = inject(CvDataApiService);
  private router: Router = inject(Router);

  public cvData$: Observable<CvData> = this.apiService.fetchData().pipe(
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

  public cvData: Signal<CvData | undefined> = toSignal(this.cvData$);
}
