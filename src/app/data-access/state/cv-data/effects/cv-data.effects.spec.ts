import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CvDataEffects } from './cv-data.effects';
import { Action } from '@ngrx/store';

describe('CvDataEffects', () => {
  let actions$: Observable<Action>;
  let effects: CvDataEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CvDataEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(CvDataEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
