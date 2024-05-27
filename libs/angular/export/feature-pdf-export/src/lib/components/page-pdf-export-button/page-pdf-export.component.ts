import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  Output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfExportService } from '../../services/pdf-export.service';
import { finalize, Subject, takeUntil, timeout } from 'rxjs';
import {
  IconArrowDownTrayComponent,
  IconLoadingComponent,
} from '@gv-cv/angular-ui-icons';
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
    IconLoadingComponent,
  ],
  templateUrl: './page-pdf-export.component.html',
  styleUrl: './page-pdf-export.component.scss',
})
export class PagePdfExportComponent implements OnDestroy {
  public readonly DEFAULT_EXPORT_TIMEOUT_MS = 10 * 1000;
  public readonly DOWNLOAD_LABEL: TranslationKey = 'buttonLabels.downloadPdf';

  @Input({ required: true }) public fileName!: string;
  @Input() public exportTimeoutMs: number = this.DEFAULT_EXPORT_TIMEOUT_MS;
  @Output() public exportError = new EventEmitter<{ error: Error }>();

  protected pending = signal(false);

  private readonly exportService = inject(PdfExportService);
  private destroyed$ = new Subject<void>();

  public export(): void {
    this.pending.set(true);
    this.exportService
      .currentPageToPdf(this.fileName)
      .pipe(
        timeout({ each: this.DEFAULT_EXPORT_TIMEOUT_MS }),
        finalize(() => {
          this.pending.set(false);
        }),
        takeUntil(this.destroyed$),
      )
      .subscribe({
        error: (error) => this.exportError.next({ error: error }),
      });
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
