import { Component, inject, Input, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfExportService } from '../../services/pdf-export.service';
import { Subject, takeUntil } from 'rxjs';
import { IconArrowDownTrayComponent } from '@gv-cv/angular-ui-icons';
import { TranslationKey } from '@gv-cv/angular-util-translations';
import { TranslateModule } from '@ngx-translate/core';
import { BouncingButtonComponent } from '@gv-cv/angular-ui-buttons';

@Component({
  selector: 'gv-cv-page-pdf-export',
  standalone: true,
  imports: [
    CommonModule,
    IconArrowDownTrayComponent,
    TranslateModule,
    BouncingButtonComponent,
  ],
  templateUrl: './page-pdf-export.component.html',
  styleUrl: './page-pdf-export.component.scss',
})
export class PagePdfExportComponent implements OnDestroy {
  public readonly DOWNLOAD_LABEL: TranslationKey = 'buttonLabels.downloadPdf';

  @Input({ required: true }) public fileName!: string;
  public pending = signal(false);

  private readonly exportService = inject(PdfExportService);
  private destroyed$ = new Subject<void>();

  public export(): void {
    this.pending.set(true);
    this.exportService
      .currentPageToPdf(this.fileName)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        error: () => this.pending.set(false),
        complete: () => this.pending.set(false),
      });
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
