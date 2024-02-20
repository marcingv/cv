import { LocalizedDatePipe } from './localized-date.pipe';
import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { ChangeDetectorRef } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TranslationsTestingModule } from '@gv-cv/angular-test-translations';

describe('LocalizedDatePipe', (): void => {
  let pipe: LocalizedDatePipe;
  let translateService: TranslateService;
  let changeDetectorRef: Partial<ChangeDetectorRef>;

  beforeEach((): void => {
    changeDetectorRef = {
      markForCheck: jest.fn(),
    };

    TestBed.configureTestingModule({
      imports: [TranslationsTestingModule],
      providers: [
        LocalizedDatePipe,
        {
          provide: ChangeDetectorRef,
          useValue: changeDetectorRef,
        },
      ],
    });

    translateService = TestBed.inject(TranslateService);
    pipe = TestBed.inject(LocalizedDatePipe);
  });

  it('create an instance', (): void => {
    expect(pipe).toBeTruthy();
  });

  it('should print date in PL format', (): void => {
    const date = new Date(2024, 1, 14);

    expect(pipe.transform(date, 'shortDate')).toEqual('14.02.2024');
  });

  it('should print date in EN format', (): void => {
    const currentLangSpy = jest
      .spyOn(translateService, 'currentLang', 'get')
      .mockReturnValue('en');

    const date: Date = new Date(2024, 1, 14);

    expect(pipe.transform(date, 'shortDate')).toEqual('2/14/24');
    expect(currentLangSpy).toHaveBeenCalled();
  });

  it('should call mark for change when language changes', async () => {
    await firstValueFrom(translateService.use('pl'));
    await firstValueFrom(translateService.use('en'));
    await firstValueFrom(translateService.use('pl'));

    expect(changeDetectorRef.markForCheck).toHaveBeenCalledTimes(3);
  });
});
