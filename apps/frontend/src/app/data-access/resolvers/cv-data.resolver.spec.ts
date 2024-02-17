import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { cvDataResolver } from './cv-data.resolver';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { first, Observable } from 'rxjs';
import {
  CvDataStateFactory,
  UiStateFactory,
} from '../../testing/factories/state';
import { CvDataActions } from '../state/cv-data/actions/cv-data.actions';
import { fromUi } from '../state/ui/reducers';
import { fromCvData } from '../state/cv-data/reducers';
import { CvData } from '@gv-cv/shared-util-types';

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

  it('should dispatch load action', (done) => {
    const dispatchSpy = spyOn(store, 'dispatch');

    const result = executeResolver(
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot,
    );

    if (!(result instanceof Observable)) {
      fail();

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
      next: (data: CvData | undefined) => {
        expect(data).toBeTruthy();
        expect(dispatchSpy).toHaveBeenCalledOnceWith(CvDataActions.load());

        done();
      },
      error: () => fail(),
    });

    store.setState({
      [fromUi.uiFeatureKey]: UiStateFactory.createInstance(),
      [fromCvData.cvDataFeatureKey]: CvDataStateFactory.createInstance(),
    });
  });
});
