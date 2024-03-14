import { defaultMetaDescriptionContentProvider } from './default-meta-description-content-provider';
import { TestBed } from '@angular/core/testing';
import { TranslationsTestingModule } from '@gv-cv/angular-test-translations';

describe('Default Meta Description Content Provider', () => {
  const provider = defaultMetaDescriptionContentProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslationsTestingModule],
    });
  });

  it('should provide page title as default meta description content', () => {
    const descriptionContent = TestBed.runInInjectionContext(() => provider());

    expect(typeof descriptionContent === 'string').toBe(true);
    expect((descriptionContent as string).length).toBeGreaterThan(0);
  });
});
