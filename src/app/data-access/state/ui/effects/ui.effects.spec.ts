import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UiEffects } from './ui.effects';
import { Action } from '@ngrx/store';

describe('UiEffects', () => {
  let actions$: Observable<Action>;
  let effects: UiEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(UiEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
