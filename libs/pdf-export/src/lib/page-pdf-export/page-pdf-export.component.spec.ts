import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagePdfExportComponent } from './page-pdf-export.component';

describe('PagePdfExportComponent', () => {
  let component: PagePdfExportComponent;
  let fixture: ComponentFixture<PagePdfExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePdfExportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagePdfExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
