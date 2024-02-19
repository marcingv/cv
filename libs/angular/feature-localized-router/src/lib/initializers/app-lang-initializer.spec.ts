import { Store } from '@ngrx/store';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { first, Observable, Subject } from 'rxjs';
import { initializeDefaultLang } from './app-lang-initializer';
import { UiActions } from '@gv-cv/angular-data-access-ui';

describe('AppLangInitializer', () => {
  const store = {
    dispatch: jest.fn(),
  } satisfies Partial<Store>;

  const localize = {
    hooks: {
      initialized: new Subject<boolean>(),
    },
  } satisfies Partial<LocalizeRouterService>;

  const translate = {
    myLang: 'pl',

    get currentLang() {
      return this.myLang;
    },
    set currentLang(currentLang: string) {
      this.myLang = currentLang;
    },
  } satisfies Partial<TranslateService> & { myLang: string };

  let initializerFunc: () => Observable<boolean>;

  beforeEach(() => {
    initializerFunc = initializeDefaultLang(
      store as unknown as Store,
      localize as unknown as LocalizeRouterService,
      translate as unknown as TranslateService,
    );
  });

  it('should create an instance', () => {
    expect(initializerFunc).toBeTruthy();
  });

  it('should set UI lang to lang detected by TranslateService', (done: jest.DoneCallback) => {
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    const expectedAction = UiActions.setInitialLang({
      language: translate.currentLang,
    });

    initializerFunc()
      .pipe(first())
      .subscribe({
        next: () => {
          expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);

          done();
        },
        error: (e) => done(e),
      });

    localize.hooks.initialized.next(true);
  });
});
