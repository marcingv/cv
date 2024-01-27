import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { uiFeature } from '../../data-access/state/ui/reducers/ui.reducer';

@Component({
  selector: 'app-oops-error-page',
  standalone: true,
  imports: [],
  templateUrl: './oops-error-page.component.html',
  styleUrl: './oops-error-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OopsErrorPageComponent implements OnInit {
  private router: Router = inject(Router);
  private store: Store = inject(Store);

  private errorState?: unknown;
  public errorMessage?: string;

  public isNavigationPending = this.store.selectSignal(
    uiFeature.selectIsNavigating,
  );

  @HostBinding('class') public hostClass: string =
    'd-flex flex-column align-items-center gap-3';

  public constructor() {
    this.errorState = this.router.lastSuccessfulNavigation?.extras.state;
  }

  public ngOnInit(): void {
    if (
      typeof this.errorState === 'object' &&
      this.errorState &&
      'error' in this.errorState
    ) {
      if (this.errorState.error instanceof Error) {
        this.errorMessage = this.errorState.error.message;
      }
    }

    if (!this.errorMessage) {
      this.errorMessage = 'Wystąpił błąd';
    }
  }

  public onGoHome(): void {
    this.router.navigate(['/']);
    this.router.events;
  }
}
