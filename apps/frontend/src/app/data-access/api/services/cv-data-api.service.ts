import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { map, Observable } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LangCode } from '../../../core/translations';
import { CvData } from '@gv-cv/data-models';

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
          throw new Error('Bład pobierania danych CV :-( ' + Date.now());
        } else {
          return data;
        }
      }),
    );
  }
}
