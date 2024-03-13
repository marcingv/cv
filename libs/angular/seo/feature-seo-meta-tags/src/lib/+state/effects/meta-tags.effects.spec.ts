import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { MetaTagsEffects } from './meta-tags.effects';
import { Action } from '@ngrx/store';

describe('MetaTagsEffects', () => {
  let actions$: Observable<Action>;
  let effects: MetaTagsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetaTagsEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(MetaTagsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
