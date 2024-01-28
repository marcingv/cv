import { LocalizedDatePipe } from './localized-date.pipe';
import { TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { ChangeDetectorRef } from '@angular/core';
import { provideNgxTranslations } from '@app/core/translations';
import { Observable, of } from 'rxjs';

class FakeLoader implements TranslateLoader {
  getTranslation(): Observable<object> {
    return of({});
  }
}

describe('LocalizedDatePipe', (): void => {
  let pipe: LocalizedDatePipe;
  let translateService: TranslateService;
  let changeDetectorRef: jasmine.SpyObj<ChangeDetectorRef>;

  beforeEach((): void => {
    changeDetectorRef = jasmine.createSpyObj<ChangeDetectorRef>([
      'markForCheck',
    ]);

    TestBed.configureTestingModule({
      providers: [
        provideNgxTranslations(),
        LocalizedDatePipe,
        {
          provide: TranslateLoader,
          useClass: FakeLoader,
        },
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
    const currentLangSpy = spyOnProperty(
      translateService,
      'currentLang',
      'get',
    ).and.returnValue('en');

    const date: Date = new Date(2024, 1, 14);

    expect(pipe.transform(date, 'shortDate')).toEqual('2/14/24');
    expect(currentLangSpy).toHaveBeenCalled();
  });

  it('should call mark for change when language changes', (): void => {
    translateService.use('pl');

    expect(changeDetectorRef.markForCheck).toHaveBeenCalled();
  });
});
