import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LangCode } from '../../../core/translations';
import { CvData } from '@gv-cv/data-models';

@Injectable({
  providedIn: 'root',
})
export class CvDataApiService {
  private http: HttpClient = inject(HttpClient);

  public fetchData(lang: LangCode): Observable<CvData> {
    return this.http.get<CvData>(`/api/cv/${lang}`);
  }
}
