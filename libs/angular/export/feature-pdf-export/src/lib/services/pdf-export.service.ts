import { inject, Injectable } from '@angular/core';
import { PdfExportApiService } from '../api/pdf-export-api.service';
import { Observable, tap } from 'rxjs';
import { saveAs } from 'file-saver';
import { QueryParams } from '@gv-cv/angular-util-router';

@Injectable({
  providedIn: 'root',
})
export class PdfExportService {
  private api = inject(PdfExportApiService);

  public currentPageToPdf(fileName: string): Observable<Blob> {
    fileName = this.preparePdfFileName(fileName);

    return this.api.exportPage(location.href + '?' + QueryParams.PRINTING).pipe(
      tap((data: Blob) => {
        saveAs(data, fileName);
      }),
    );
  }

  private preparePdfFileName(fileName: string | undefined): string {
    if (!fileName || !fileName.trim()) {
      fileName = 'page';
    }
    if (!fileName.toLowerCase().endsWith('.pdf')) {
      fileName += '.pdf';
    }

    return fileName;
  }
}
