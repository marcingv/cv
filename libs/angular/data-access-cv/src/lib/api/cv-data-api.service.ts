import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CvData } from '@gv-cv/shared-util-types';

@Injectable({
  providedIn: 'root',
})
export class CvDataApiService {
  private http: HttpClient = inject(HttpClient);

  public fetchData(lang: string): Observable<CvData> {
    return this.http.get<CvData>(`/api/cv/${lang}`);
  }
}
