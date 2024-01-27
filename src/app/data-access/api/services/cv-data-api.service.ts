import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CvData } from '../../../domain/models';
import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CvDataApiService {
  private http: HttpClient = inject(HttpClient);

  private isServerPlatform = isPlatformServer(inject(PLATFORM_ID));

  public fetchData(): Observable<CvData> {
    return this.http.get<CvData>('/assets/cv-pl.json').pipe(
      // delay(1000),
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
