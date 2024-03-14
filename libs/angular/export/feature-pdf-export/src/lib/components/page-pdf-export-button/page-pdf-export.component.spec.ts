import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagePdfExportComponent } from './page-pdf-export.component';
import { PdfExportService } from '../../services/pdf-export.service';
import { of } from 'rxjs';
import { TranslationsTestingModule } from '@gv-cv/angular-test-translations';

jest.mock('../../services/pdf-export.service');

describe('PagePdfExportComponent', () => {
  let component: PagePdfExportComponent;
  let fixture: ComponentFixture<PagePdfExportComponent>;
  let exportService: PdfExportService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePdfExportComponent, TranslationsTestingModule],
      providers: [PdfExportService],
    }).compileComponents();

    exportService = TestBed.inject(PdfExportService);
    fixture = TestBed.createComponent(PagePdfExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should export pdf', () => {
    component.fileName = 'my-pdf-name';
    fixture.detectChanges();

    const exportSpy = jest
      .spyOn(exportService, 'currentPageToPdf')
      .mockReturnValue(of());

    component.export();

    expect(exportSpy).toHaveBeenCalledWith(component.fileName);
  });
});
