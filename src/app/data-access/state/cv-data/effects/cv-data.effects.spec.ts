import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { CvDataEffects } from './cv-data.effects';
import { Action } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CvDataApiService } from '@app/data-access/api/services';

describe('CvDataEffects', () => {
  let actions$: Observable<Action>;
  let effects: CvDataEffects;
  let api: jasmine.SpyObj<CvDataApiService>;

  beforeEach(() => {
    api = jasmine.createSpyObj<CvDataApiService>(['fetchData']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        CvDataEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        { provide: CvDataApiService, useValue: api },
      ],
    });

    effects = TestBed.inject(CvDataEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
