import { TimeSpanDurationPipe } from './time-span-duration.pipe';
import { TestBed } from '@angular/core/testing';
import { TranslationsTestingModule } from '@gv-cv/angular-test-translations';
import { ChangeDetectorRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EN_LANG_CODE, PL_LANG_CODE } from '@gv-cv/shared-util-types';
import { firstValueFrom } from 'rxjs';
import spyOn = jest.spyOn;

describe('TimeSpanDurationPipe', () => {
  let pipe: TimeSpanDurationPipe;
  let changeDetectorRef: Partial<ChangeDetectorRef>;
  let translateService: TranslateService;

  beforeEach(() => {
    changeDetectorRef = {
      markForCheck: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [TranslationsTestingModule],
      providers: [
        TimeSpanDurationPipe,
        {
          provide: ChangeDetectorRef,
          useValue: changeDetectorRef,
        },
      ],
    });

    translateService = TestBed.inject(TranslateService);

    pipe = TestBed.inject(TimeSpanDurationPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should mark for check on translations change', async () => {
    const markForCheckSpy = spyOn(changeDetectorRef, 'markForCheck');

    await firstValueFrom(translateService.use(EN_LANG_CODE));

    expect(markForCheckSpy).toHaveBeenCalled();
  });

  it('should accept date inputs in various formats', () => {
    const fromDate = new Date(2000, 1, 1);
    const toDate = new Date();

    const expectedText = pipe.transform({ from: fromDate, to: toDate });

    expect(
      pipe.transform({ from: fromDate.getTime(), to: toDate.getTime() }),
    ).toEqual(expectedText);

    expect(
      pipe.transform({
        from: fromDate.toUTCString(),
        to: toDate.toUTCString(),
      }),
    ).toEqual(expectedText);

    expect(pipe.transform({ from: fromDate, to: toDate.getTime() })).toEqual(
      expectedText,
    );

    expect(
      pipe.transform({ from: fromDate, to: toDate.toUTCString() }),
    ).toEqual(expectedText);
  });

  it('should calculate timespan to current date if "date to" is not specified', () => {
    const fromDate = new Date(2000, 1, 1);
    const toDate = new Date();

    const expectedText = pipe.transform({ from: fromDate, to: toDate });

    expect(pipe.transform({ from: fromDate })).toEqual(expectedText);
  });

  describe('time span in PL', () => {
    beforeEach(() => {
      translateService.use(PL_LANG_CODE);
    });

    it('should return formatted difference in years', () => {
      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2024, 1, 1),
        }),
      ).toEqual('1 rok');

      expect(
        pipe.transform({
          from: new Date(2022, 1, 1),
          to: new Date(2024, 1, 1),
        }),
      ).toEqual('2 lata');

      expect(
        pipe.transform({
          from: new Date(2021, 1, 1),
          to: new Date(2024, 1, 1),
        }),
      ).toEqual('3 lata');

      expect(
        pipe.transform({
          from: new Date(2020, 1, 1),
          to: new Date(2024, 1, 1),
        }),
      ).toEqual('4 lata');

      expect(
        pipe.transform({
          from: new Date(2019, 1, 1),
          to: new Date(2024, 1, 1),
        }),
      ).toEqual('5 lat');

      expect(
        pipe.transform({
          from: new Date(2014, 1, 1),
          to: new Date(2024, 1, 1),
        }),
      ).toEqual('10 lat');
    });

    it('should return formatted difference in months', () => {
      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 2, 7),
        }),
      ).toEqual('1 miesiąc');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 3, 7),
        }),
      ).toEqual('2 miesiące');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 4, 7),
        }),
      ).toEqual('3 miesiące');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 5, 7),
        }),
      ).toEqual('4 miesiące');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 6, 7),
        }),
      ).toEqual('5 miesięcy');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 7, 7),
        }),
      ).toEqual('6 miesięcy');
    });

    it('should return formatted difference in days', () => {
      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 1, 1),
        }),
      ).toEqual('0 dni');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 1, 2),
        }),
      ).toEqual('1 dzień');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 1, 3),
        }),
      ).toEqual('2 dni');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 1, 4),
        }),
      ).toEqual('3 dni');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 1, 5),
        }),
      ).toEqual('4 dni');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 1, 6),
        }),
      ).toEqual('5 dni');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 1, 11),
        }),
      ).toEqual('10 dni');
    });
  });

  describe('time span in EN', () => {
    beforeEach(() => {
      translateService.use(EN_LANG_CODE);
    });

    it('should return formatted difference in years', () => {
      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2024, 1, 1),
        }),
      ).toEqual('1 year');

      expect(
        pipe.transform({
          from: new Date(2022, 1, 1),
          to: new Date(2024, 1, 1),
        }),
      ).toEqual('2 years');

      expect(
        pipe.transform({
          from: new Date(2021, 1, 1),
          to: new Date(2024, 1, 1),
        }),
      ).toEqual('3 years');

      expect(
        pipe.transform({
          from: new Date(2020, 1, 1),
          to: new Date(2024, 1, 1),
        }),
      ).toEqual('4 years');

      expect(
        pipe.transform({
          from: new Date(2019, 1, 1),
          to: new Date(2024, 1, 1),
        }),
      ).toEqual('5 years');

      expect(
        pipe.transform({
          from: new Date(2014, 1, 1),
          to: new Date(2024, 1, 1),
        }),
      ).toEqual('10 years');
    });

    it('should return formatted difference in months', () => {
      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 2, 7),
        }),
      ).toEqual('1 month');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 3, 7),
        }),
      ).toEqual('2 months');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 4, 7),
        }),
      ).toEqual('3 months');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 5, 7),
        }),
      ).toEqual('4 months');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 6, 7),
        }),
      ).toEqual('5 months');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 7, 7),
        }),
      ).toEqual('6 months');
    });

    it('should return formatted difference in days', () => {
      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 1, 1),
        }),
      ).toEqual('0 days');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 1, 2),
        }),
      ).toEqual('1 day');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 1, 3),
        }),
      ).toEqual('2 days');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 1, 4),
        }),
      ).toEqual('3 days');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 1, 5),
        }),
      ).toEqual('4 days');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 1, 6),
        }),
      ).toEqual('5 days');

      expect(
        pipe.transform({
          from: new Date(2023, 1, 1),
          to: new Date(2023, 1, 11),
        }),
      ).toEqual('10 days');
    });
  });
});
