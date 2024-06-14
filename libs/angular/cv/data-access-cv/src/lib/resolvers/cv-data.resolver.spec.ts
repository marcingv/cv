import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  RedirectCommand,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { cvDataResolver } from './cv-data.resolver';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { first, Observable } from 'rxjs';
import { CvData } from '@gv-cv/shared-util-types';
import { fromUi, UiStateFactory } from '@gv-cv/angular-data-access-ui';
import { CvDataActions, CvDataStateFactory, fromCvData } from '../+state';

describe('cvDataResolver', () => {
  const executeResolver: ResolveFn<CvData | undefined> = (
    ...resolverParameters
  ) =>
    TestBed.runInInjectionContext(() => cvDataResolver(...resolverParameters));

  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });

  it('should dispatch load action', (done: jest.DoneCallback) => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    const result = executeResolver(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot,
    );

    if (!(result instanceof Observable)) {
      done(new Error('Resolver must return an observable'));

      return;
    }

    store.setState({
      [fromUi.uiFeatureKey]: UiStateFactory.createInstance(),
      [fromCvData.cvDataFeatureKey]: CvDataStateFactory.createInstance({
        ids: [],
        entities: {},
      }),
    });

    result.pipe(first()).subscribe({
      next: (data: CvData | RedirectCommand | undefined) => {
        expect(data).toBeTruthy();
        expect(dispatchSpy).toHaveBeenCalledWith(CvDataActions.load());

        done();
      },
      error: (e) => done(e),
    });

    store.setState({
      [fromUi.uiFeatureKey]: UiStateFactory.createInstance(),
      [fromCvData.cvDataFeatureKey]: CvDataStateFactory.createInstance(),
    });
  });
});
