import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CvData } from '@app/domain/models';
import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LangCode } from '../../state/ui/models';

@Injectable({
  providedIn: 'root',
})
export class CvDataApiService {
  private http: HttpClient = inject(HttpClient);

  private isServerPlatform = isPlatformServer(inject(PLATFORM_ID));

  public fetchData(lang: LangCode): Observable<CvData> {
    const fileName: string = lang ? `cv-${lang}.json` : 'cv-pl.json';

    return this.http.get<CvData>(`/assets/${fileName}`).pipe(
      map((data) => {
        // const shouldThrowError = Math.random() > 0.8;
        const shouldThrowError = false; //this.isServerPlatform;

        if (shouldThrowError) {
          throw new Error('Bład pobierania danych CV :-(');
        } else {
          return data;
        }
      }),
    );
  }
}
