import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { cvDataResolver } from './cv-data.resolver';
import { CvData } from '../../domain/models';

describe('cvDataResolver', () => {
  const executeResolver: ResolveFn<CvData | undefined> = (
    ...resolverParameters
  ) =>
    TestBed.runInInjectionContext(() => cvDataResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
