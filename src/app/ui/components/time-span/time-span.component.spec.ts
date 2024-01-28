import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeSpanComponent } from './time-span.component';
import { TranslationsTestingModule } from '@app/testing/translations';
import { TranslateService } from '@ngx-translate/core';
import { TranslationKey } from '@app/core/translations';

describe('TimeSpanComponent', () => {
  let component: TimeSpanComponent;
  let fixture: ComponentFixture<TimeSpanComponent>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeSpanComponent, TranslationsTestingModule],
    }).compileComponents();

    translateService = TestBed.inject(TranslateService);
    fixture = TestBed.createComponent(TimeSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display dates range', async () => {
    const dateFrom = new Date(2024, 1, 14);
    const dateTo = new Date(2024, 1, 20);

    fixture.componentRef.setInput('from', dateFrom);
    fixture.componentRef.setInput('to', dateTo);

    fixture.detectChanges();
    await fixture.whenStable();

    expect(fixture.nativeElement.textContent).toEqual(
      '14.02.2024 - 20.02.2024',
    );
  });

  it('should display label for pending period', async () => {
    const dateFrom = new Date(2024, 1, 14);

    fixture.componentRef.setInput('from', dateFrom);
    fixture.componentRef.setInput('to', undefined);

    fixture.detectChanges();
    await fixture.whenStable();

    const tillNowLabel: TranslationKey = 'tillNow';
    expect(fixture.nativeElement.textContent).toEqual(
      `14.02.2024 - ${translateService.instant(tillNowLabel)}`,
    );
  });
});
