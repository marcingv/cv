import { inject, Injectable, Signal } from '@angular/core';
import { CvDataApiService } from '../../data-access/api/services';
import { Observable, shareReplay, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CvData } from '../../domain/models';

@Injectable()
export class HomePageService {
  private apiService: CvDataApiService = inject(CvDataApiService);

  public cvData$: Observable<CvData> = this.apiService.fetchData().pipe(
    tap(() => console.warn('Pobieram z API')),
    shareReplay(1),
    tap(() => console.warn('Mam z share replay')),
  );

  public cvData: Signal<CvData | undefined> = toSignal(this.cvData$);
}
