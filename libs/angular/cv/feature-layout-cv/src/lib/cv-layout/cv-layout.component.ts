import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangPickerComponent } from '@gv-cv/angular-feature-translations';
import { CvPrintingLayoutComponent } from '@gv-cv/feature-cv-printing-layout';
import { map } from 'rxjs';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { Store } from '@ngrx/store';
import { RouterSelectors } from '@gv-cv/angular-data-access-router';
import { QueryParams } from '@gv-cv/angular-util-router';

@Component({
  selector: 'gv-cv-cv-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    LangPickerComponent,
    CvPrintingLayoutComponent,
    AsyncPipe,
    NgTemplateOutlet,
  ],
  templateUrl: './cv-layout.component.html',
  styleUrl: './cv-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvLayoutComponent {
  private store: Store = inject(Store);

  public isPdfMode$ = this.store
    .select(RouterSelectors.selectQueryParam(QueryParams.PRINTING))
    .pipe(map((param) => param !== undefined));
}
