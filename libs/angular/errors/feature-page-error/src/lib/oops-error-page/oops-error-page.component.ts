import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  Signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { UiActions, uiFeature } from '@gv-cv/angular-data-access-ui';
import { TranslationKey } from '@gv-cv/angular-util-translations';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'gv-cv-oops-error-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './oops-error-page.component.html',
  styleUrl: './oops-error-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OopsErrorPageComponent implements OnDestroy {
  public readonly TITLE_LABEL: TranslationKey = 'errorOopsTitle';
  public readonly REFRESH_LABEL: TranslationKey = 'refresh';
  public readonly FALLBACK_ERROR_MESSAGE: TranslationKey =
    'errorUnknownMessage';

  private router: Router = inject(Router);
  private store: Store = inject(Store);
  private localizeRouterService = inject(LocalizeRouterService);

  public errorMessage: Signal<string | undefined> = this.store.selectSignal(
    uiFeature.selectErrorPageMessage,
  );

  public isNavigationPending: Signal<boolean> = this.store.selectSignal(
    uiFeature.selectIsNavigating,
  );

  public onGoHome(): void {
    this.router.navigate([this.localizeRouterService.translateRoute('/')]);
  }

  public ngOnDestroy(): void {
    this.store.dispatch(UiActions.clearErrorPageMessage());
  }
}
