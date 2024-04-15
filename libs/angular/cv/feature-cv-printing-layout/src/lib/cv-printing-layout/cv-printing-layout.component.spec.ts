import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvPrintingLayoutComponent } from './cv-printing-layout.component';

describe('FeatureCvPrintingLayoutComponent', () => {
  let component: CvPrintingLayoutComponent;
  let fixture: ComponentFixture<CvPrintingLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvPrintingLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CvPrintingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
