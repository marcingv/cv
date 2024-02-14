import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PdfExportApiService {
  private http: HttpClient = inject(HttpClient);

  public exportPage(url: string): Observable<Blob> {
    const payload = {
      url: url,
    };

    return this.http.post('/api/export/pdf', payload, {
      responseType: 'blob',
    });
  }
}
