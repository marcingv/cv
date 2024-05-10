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
  public readonly FOOTER_HEIGHT_CLASS = 'h-12';

  private store = inject(Store);

  public footerText$ = this.store.select(
    CvDataSelectors.selectRODOConsentForCurrentLanguage,
  );
}
