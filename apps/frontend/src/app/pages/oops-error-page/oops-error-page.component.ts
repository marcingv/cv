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
import { TranslationKey } from '../../core/translations';
import { uiFeature } from '../../data-access/state/ui/reducers/ui.reducer';
import { UiActions } from '../../data-access/state/ui/actions/ui.actions';

@Component({
  selector: 'app-oops-error-page',
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

  public errorMessage: Signal<string | undefined> = this.store.selectSignal(
    uiFeature.selectErrorPageMessage,
  );

  public isNavigationPending: Signal<boolean> = this.store.selectSignal(
    uiFeature.selectIsNavigating,
  );

  public onGoHome(): void {
    this.router.navigate(['/']);
  }

  public ngOnDestroy(): void {
    this.store.dispatch(UiActions.clearErrorPageMessage());
  }
}
