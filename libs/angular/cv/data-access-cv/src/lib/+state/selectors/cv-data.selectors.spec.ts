import * as fromCvData from '../reducers/cv-data.reducer';
import { cvDataFeatureKey } from '../reducers/cv-data.reducer';
import {
  fromUi,
  uiFeatureKey,
  UiStateFactory,
} from '@gv-cv/angular-data-access-ui';
import { CvDataStateFactory } from '../testing';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { firstValueFrom } from 'rxjs';
import { Course } from '@gv-cv/shared-util-types';
import {
  selectCvDataForCurrentLanguage,
  selectLeadingCertificate,
  selectRODOConsentForCurrentLanguage,
} from './cv-data.selectors';

describe('CvData Selectors', () => {
  let store: MockStore;

  const state: {
    [fromUi.uiFeatureKey]: fromUi.State;
    [fromCvData.cvDataFeatureKey]: fromCvData.State;
  } = {
    [fromUi.uiFeatureKey]: UiStateFactory.createInstance(),
    [fromCvData.cvDataFeatureKey]: CvDataStateFactory.createInstance(),
  };

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });

    store = TestBed.inject(MockStore);
    store.setState(state);
  });

  it('should select the feature state', async () => {
    const result = await firstValueFrom(
      store.select(fromCvData.cvDataFeature.selectCvDataState),
    );

    expect(result).toBeTruthy();
  });

  it('should select cv data for current language', async () => {
    const result = await firstValueFrom(
      store.select(selectCvDataForCurrentLanguage),
    );

    expect(result).toBeTruthy();
    expect(result).toBe(
      state[cvDataFeatureKey].entities[state[uiFeatureKey].lang]?.data,
    );
  });

  it('should select RODO constents', async () => {
    const result = await firstValueFrom(
      store.select(selectRODOConsentForCurrentLanguage),
    );

    expect(result).toBeTruthy();
    expect(result).toBe(
      state[cvDataFeatureKey].entities[state[uiFeatureKey].lang]?.data.consents
        .RODO,
    );
  });

  it('should select leading certificate', async () => {
    const result: Course | undefined = await firstValueFrom(
      store.select(selectLeadingCertificate),
    );

    expect(result).toBeTruthy();
    expect(result?.platform).toEqual('angular-training');
    expect(result?.type).toEqual('angular-expert-developer');
  });
});
