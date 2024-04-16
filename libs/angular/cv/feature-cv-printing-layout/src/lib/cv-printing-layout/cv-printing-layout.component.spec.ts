import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvPrintingLayoutComponent } from './cv-printing-layout.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CvDataStateFactory, fromCvData } from '@gv-cv/angular-data-access-cv';
import { fromUi, UiStateFactory } from '@gv-cv/angular-data-access-ui';
import { CvDataFactory } from '@gv-cv/shared-util-types';
import { By } from '@angular/platform-browser';

describe('FeatureCvPrintingLayoutComponent', () => {
  let component: CvPrintingLayoutComponent;
  let fixture: ComponentFixture<CvPrintingLayoutComponent>;
  let store: MockStore;

  const state: {
    [fromUi.uiFeatureKey]: fromUi.State;
    [fromCvData.cvDataFeatureKey]: fromCvData.State;
  } = {
    [fromUi.uiFeatureKey]: UiStateFactory.createInstance({
      lang: 'TEST',
    }),
    [fromCvData.cvDataFeatureKey]: CvDataStateFactory.createInstance({
      ids: ['TEST'],
      entities: CvDataStateFactory.createDictionary([
        {
          language: 'TEST',
          data: CvDataFactory.createInstance({
            lang: 'TEST',
            consents: {
              RODO: 'My RODO consent',
            },
          }),
        },
      ]),
    }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvPrintingLayoutComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    store.setState(state);

    fixture = TestBed.createComponent(CvPrintingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should print RODO consent in footer', () => {
    const footer = fixture.debugElement.query(By.css('footer'));

    expect(footer).toBeTruthy();
    expect(footer.nativeElement.textContent).toContain('My RODO consent');
  });
});
