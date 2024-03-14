import { metaDescriptionContentProvider } from './meta-description-content-provider';
import { TestBed } from '@angular/core/testing';
import { TranslationsTestingModule } from '@gv-cv/angular-test-translations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { firstValueFrom, Observable } from 'rxjs';
import { CvDataStateFactory, fromCvData } from '@gv-cv/angular-data-access-cv';
import { fromUi, UiStateFactory } from '@gv-cv/angular-data-access-ui';

describe('Meta Description Content Provider', () => {
  const provider = metaDescriptionContentProvider;
  let store: MockStore;
  const state: {
    [fromCvData.cvDataFeatureKey]: fromCvData.State;
    [fromUi.uiFeatureKey]: fromUi.State;
  } = {
    [fromCvData.cvDataFeatureKey]: CvDataStateFactory.createInstance(),
    [fromUi.uiFeatureKey]: UiStateFactory.createInstance(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslationsTestingModule],
      providers: [provideMockStore()],
    });

    store = TestBed.inject(MockStore);
    store.setState(state);
  });

  it('should provide description content using cv data', async () => {
    const descriptionContent = TestBed.runInInjectionContext(() => provider());

    expect(descriptionContent).toBeInstanceOf(Observable);

    const resolvedDescription = await firstValueFrom(
      descriptionContent as Observable<string>,
    );

    expect(resolvedDescription).toBeTruthy();
    expect(resolvedDescription.length).toBeGreaterThan(0);
  });
});
