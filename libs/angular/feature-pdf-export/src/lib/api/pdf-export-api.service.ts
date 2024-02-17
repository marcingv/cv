import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PdfExportRequest } from '@gv-cv/shared-util-types';

@Injectable({
  providedIn: 'root',
})
export class PdfExportApiService {
  private http: HttpClient = inject(HttpClient);

  public exportPage(url: string): Observable<Blob> {
    const payload: PdfExportRequest = {
      url: url,
    };

    return this.http.post('/api/export/pdf', payload, {
      responseType: 'blob',
    });
  }
}
