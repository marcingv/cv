import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CvDataSelectors } from '@gv-cv/angular-data-access-cv';

@Component({
  selector: 'gv-cv-printing-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-printing-layout.component.html',
  styleUrl: './cv-printing-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvPrintingLayoutComponent {
  private store = inject(Store);

  public footerText$ = this.store.select(
    CvDataSelectors.selectRODOConsentForCurrentLanguage,
  );
}
