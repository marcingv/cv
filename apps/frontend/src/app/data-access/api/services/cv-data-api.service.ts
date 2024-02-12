import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LangCode } from '../../../core/translations';
import { CvData } from '@gv-cv/data-models';

@Injectable({
  providedIn: 'root',
})
export class CvDataApiService {
  private readonly SSR_API_HOST = 'http://api:3000';
  private readonly API_HOST = '';
  private http: HttpClient = inject(HttpClient);

  private isServerPlatform = isPlatformServer(inject(PLATFORM_ID));

  public fetchData(lang: LangCode): Observable<CvData> {
    const host = this.isServerPlatform ? this.SSR_API_HOST : this.API_HOST;

    return this.http.get<CvData>(`${host}/api/cv/${lang}`);
  }
}
