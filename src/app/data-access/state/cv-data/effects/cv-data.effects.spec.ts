import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CvDataEffects } from './cv-data.effects';

describe('CvDataEffects', () => {
  let actions$: Observable<any>;
  let effects: CvDataEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CvDataEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CvDataEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
