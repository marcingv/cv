import {
  EnvironmentInjector,
  Injectable,
  runInInjectionContext,
} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { first, Observable, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { routerNavigatedAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { RouterSelectors } from '@gv-cv/angular-data-access-router';
import { ResolveMetaTagValueFn, RouterDataMetaTags } from '../../models';
import { fromPromise } from 'rxjs/internal/observable/innerFrom';
import { SeoMetaTagsService } from '../../services';

@Injectable()
export class MetaTagsEffects {
  public setDescriptionTag$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerNavigatedAction),
        withLatestFrom(
          this.store.select(
            RouterSelectors.selectRouteDataParam(
              RouterDataMetaTags.META_DESCRIPTION,
            ),
          ),
        ),
        switchMap(([_action, metaTagValue]) => {
          return this.resolveMetaTagValue(metaTagValue);
        }),
        tap((description) => {
          this.seoMetaTags.setDescription(description);
        }),
      ),
    { dispatch: false },
  );

  public constructor(
    private actions$: Actions,
    private store: Store,
    private seoMetaTags: SeoMetaTagsService,
    private environmentInjector: EnvironmentInjector,
  ) {}

  private resolveMetaTagValue(
    metaTagValue: ResolveMetaTagValueFn | string | undefined,
  ): Observable<string> {
    if (!metaTagValue) {
      return of('');
    }
    if (typeof metaTagValue === 'string') {
      return of(metaTagValue);
    }

    const resolveFn: ResolveMetaTagValueFn = metaTagValue;
    const resolvedValue: Observable<string> | Promise<string> | string =
      runInInjectionContext(this.environmentInjector, resolveFn);

    let resolvedValue$: Observable<string> | undefined;
    if (resolvedValue instanceof Promise) {
      resolvedValue$ = fromPromise(resolvedValue);
    } else if (resolvedValue instanceof Observable) {
      resolvedValue$ = resolvedValue;
    } else {
      resolvedValue$ = of(resolvedValue);
    }

    return resolvedValue$.pipe(first());
  }
}
