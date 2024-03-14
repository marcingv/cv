import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { first, of, Subject } from 'rxjs';
import { MetaTagsEffects } from './meta-tags.effects';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SeoMetaTagsService } from '../../services';
import { EnvironmentInjector } from '@angular/core';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { RouterSelectors } from '@gv-cv/angular-data-access-router';
import { RouterDataMetaTags } from '../../models';

describe('MetaTagsEffects', () => {
  const actions$: Subject<Action> = new Subject<Action>();
  let store: MockStore;
  let effects: MetaTagsEffects;
  let seoMetaTags: Partial<SeoMetaTagsService>;
  let environmentInjector: Partial<EnvironmentInjector>;

  beforeEach(() => {
    seoMetaTags = {
      setDescription: jest.fn(),
    };
    environmentInjector = {};

    TestBed.configureTestingModule({
      providers: [
        MetaTagsEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
        { provide: SeoMetaTagsService, useValue: seoMetaTags },
        { provide: EnvironmentInjector, useValue: environmentInjector },
      ],
    });

    effects = TestBed.inject(MetaTagsEffects);
    store = TestBed.inject(MockStore);
  });

  afterEach(() => {
    store.resetSelectors();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('Set description tag', () => {
    const metaTagDataValueProviders = [
      {
        valueProvider: 'sample description',
        expectedDescription: 'sample description',
      },
      {
        valueProvider: () => Promise.resolve('description from promise'),
        expectedDescription: 'description from promise',
      },
      {
        valueProvider: () => of('description from observable'),
        expectedDescription: 'description from observable',
      },
      {
        valueProvider: () => 'description from function returning string',
        expectedDescription: 'description from function returning string',
      },
    ];

    it.each(metaTagDataValueProviders)(
      'should set meta content as "$expectedDescription"',
      ({ valueProvider, expectedDescription }, done: jest.DoneCallback) => {
        store.overrideSelector(RouterSelectors.selectRouteData, {
          [RouterDataMetaTags.META_DESCRIPTION]: valueProvider,
        });
        const setDescriptionSpy = jest.spyOn(seoMetaTags, 'setDescription');

        effects.setDescriptionTag$.pipe(first()).subscribe({
          next: () => {
            expect(setDescriptionSpy).toHaveBeenCalledWith(expectedDescription);

            done();
          },
          error: (e) => done(e),
        });
        actions$.next({ type: ROUTER_NAVIGATED });
      },
    );
  });
});
