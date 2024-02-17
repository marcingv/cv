import { TestBed } from '@angular/core/testing';

import { PdfExportService } from './pdf-export.service';
import { PdfExportApiService } from '../api/pdf-export-api.service';
import { firstValueFrom, Observable, of } from 'rxjs';
import { saveAs } from 'file-saver';

jest.mock('file-saver', () => ({
  saveAs: jest.fn(),
}));

describe('PdfExportService', () => {
  let service: PdfExportService;
  let api: Partial<PdfExportApiService>;

  beforeEach(() => {
    api = {
      exportPage(url: string): Observable<Blob> {
        return of(new Blob());
      },
    };

    TestBed.configureTestingModule({
      providers: [{ provide: PdfExportApiService, useValue: api }],
    });
    service = TestBed.inject(PdfExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call api to export current page as pdf', async () => {
    const exportPageSpy = jest.spyOn(api, 'exportPage');
    const currentPageUrl = 'http://localhost:4200/cv/pl';

    Object.defineProperty(window, 'location', {
      value: {
        href: currentPageUrl,
      },
    });

    await firstValueFrom(service.currentPageToPdf('test-file'));

    expect(exportPageSpy).toHaveBeenCalledWith(currentPageUrl);
    expect(saveAs).toHaveBeenCalledWith(new Blob(), 'test-file.pdf');
  });
});
