import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TranslatedPageTitlesStrategyService } from './translated-page-titles-strategy.service';
import { provideLocationMocks } from '@angular/common/testing';
import { provideRouter, Router, TitleStrategy } from '@angular/router';
import { TranslationsTestingModule } from '@gv-cv/angular-test-translations';
import { DOCUMENT } from '@angular/common';
import {
  pickTranslationKey,
  TranslationKey,
} from '@gv-cv/angular-util-translations';
import { TranslateService } from '@ngx-translate/core';

describe('TranslatedPageTitlesStrategyService', () => {
  let service: TranslatedPageTitlesStrategyService;
  let translateService: TranslateService;
  let router: Router;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslationsTestingModule],
      providers: [
        provideLocationMocks(),
        provideRouter([]),
        {
          provide: TitleStrategy,
          useClass: TranslatedPageTitlesStrategyService,
        },
      ],
    });

    router = TestBed.inject(Router);
    document = TestBed.inject(DOCUMENT);
    translateService = TestBed.inject(TranslateService);
    service = TestBed.inject(TranslatedPageTitlesStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should translate route title', fakeAsync(() => {
    const titleKey: TranslationKey = pickTranslationKey('aboutMe');

    router.resetConfig([
      {
        path: 'home',
        title: titleKey,
        children: [],
      },
    ]);
    router.navigateByUrl('home');

    tick();

    expect(document.title).toBe(translateService.instant(titleKey));
  }));

  it('should use default page title when route has no title', fakeAsync(() => {
    const defaultTitleKey: TranslationKey =
      pickTranslationKey('pageTitles.default');

    router.resetConfig([
      {
        path: 'home',
        children: [],
      },
    ]);
    router.navigateByUrl('home');

    tick();

    expect(document.title).toBe(translateService.instant(defaultTitleKey));
  }));
});
