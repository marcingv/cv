import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';
import { PagePdfExportComponent } from './page-pdf-export.component';
import { PdfExportService } from '../../services/pdf-export.service';
import { delay, map, of } from 'rxjs';
import { TranslationsTestingModule } from '@gv-cv/angular-test-translations';
import { ToastMessage, ToastsService } from '@gv-cv/angular-ui-toasts';
import { HttpErrorResponse } from '@angular/common/http';

jest.mock('../../services/pdf-export.service');

describe('PagePdfExportComponent', () => {
  let component: PagePdfExportComponent;
  let fixture: ComponentFixture<PagePdfExportComponent>;
  let exportService: PdfExportService;
  let toastsService: ToastsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePdfExportComponent, TranslationsTestingModule],
      providers: [PdfExportService, ToastsService],
    }).compileComponents();

    exportService = TestBed.inject(PdfExportService);
    toastsService = TestBed.inject(ToastsService);

    fixture = TestBed.createComponent(PagePdfExportComponent);
    component = fixture.componentInstance;
    component.fileName = 'my-pdf-name';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should export pdf', () => {
    const exportSpy = jest
      .spyOn(exportService, 'currentPageToPdf')
      .mockReturnValue(of(new Blob([])));

    component.export();

    expect(exportSpy).toHaveBeenCalledWith(component.fileName);
  });

  it('should update pending signal during successful export', fakeAsync(() => {
    const exportSpy = jest
      .spyOn(exportService, 'currentPageToPdf')
      .mockReturnValue(of(new Blob([])).pipe(delay(500)));

    expect(component.isPending()).toBeFalsy();

    component.export();
    expect(exportSpy).toHaveBeenCalled();
    expect(component.isPending()).toBeTruthy();

    tick(500);
    flush();

    expect(component.isPending()).toBeFalsy();
  }));

  it('should update pending signal during export failure', fakeAsync(() => {
    const exportSpy = jest
      .spyOn(exportService, 'currentPageToPdf')
      .mockReturnValue(
        of(new Blob([])).pipe(
          delay(500),
          map(() => {
            throw new HttpErrorResponse({ error: 'An error', status: 500 });
          }),
        ),
      );

    expect(component.isPending()).toBeFalsy();

    component.export();
    expect(exportSpy).toHaveBeenCalled();
    expect(component.isPending()).toBeTruthy();

    tick(500);
    flush();

    expect(component.isPending()).toBeFalsy();
  }));

  it('should show toast message on export success', fakeAsync(() => {
    const exportSpy = jest
      .spyOn(exportService, 'currentPageToPdf')
      .mockReturnValue(of(new Blob([])).pipe(delay(500)));

    let toast: ToastMessage | undefined;
    const toastShowSpy = jest
      .spyOn(toastsService, 'show')
      .mockImplementation((message: ToastMessage): void => {
        toast = message;
      });

    component.export();
    tick(500);
    flush();

    expect(exportSpy).toHaveBeenCalled();
    expect(toastShowSpy).toHaveBeenCalled();
    expect(toast).toBeTruthy();
    expect(toast?.severity).toEqual('primary');
  }));

  it('should show toast message on export failure', fakeAsync(() => {
    const exportSpy = jest
      .spyOn(exportService, 'currentPageToPdf')
      .mockReturnValue(
        of(new Blob([])).pipe(
          delay(500),
          map(() => {
            throw new HttpErrorResponse({ error: 'An error', status: 500 });
          }),
        ),
      );

    let toast: ToastMessage | undefined;
    const toastShowSpy = jest
      .spyOn(toastsService, 'show')
      .mockImplementation((message: ToastMessage): void => {
        toast = message;
      });

    component.export();
    tick(500);
    flush();

    expect(exportSpy).toHaveBeenCalled();
    expect(toastShowSpy).toHaveBeenCalled();
    expect(toast).toBeTruthy();
    expect(toast?.severity).toEqual('error');
  }));
});
