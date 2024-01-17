import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oops-error-page',
  standalone: true,
  imports: [],
  templateUrl: './oops-error-page.component.html',
  styleUrl: './oops-error-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'd-flex flex-column align-items-center',
  },
})
export class OopsErrorPageComponent implements OnInit {
  private router: Router = inject(Router);

  private errorState?: Object;
  public errorMessage?: string;

  public constructor() {
    this.errorState = this.router.lastSuccessfulNavigation?.extras.state;
    console.error(this.errorState);
  }

  public ngOnInit(): void {
    if (this.errorState && 'error' in this.errorState) {
      if (this.errorState.error instanceof Error) {
        this.errorMessage = this.errorState.error.message;
      }
    }

    if (!this.errorMessage) {
      this.errorMessage = 'Wystąpił błąd';
    }
  }
}
