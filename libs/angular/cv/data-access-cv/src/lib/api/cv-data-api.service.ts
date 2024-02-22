import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CvData, LangCode } from '@gv-cv/shared-util-types';
import { CvDataApi } from './cv-data-api';

@Injectable({
  providedIn: 'root',
})
export class CvDataApiService extends CvDataApi {
  private http: HttpClient = inject(HttpClient);

  public fetchData(lang: LangCode): Observable<CvData> {
    return this.http.get<CvData>(`/api/cv/${lang}`);
  }
}
