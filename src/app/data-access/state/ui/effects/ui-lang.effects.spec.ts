import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { UiLangEffects } from './ui-lang.effects';
import { Action } from '@ngrx/store';

describe('UiLangEffects', () => {
  let actions$: Observable<Action>;
  let effects: UiLangEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiLangEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(UiLangEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
