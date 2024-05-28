import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  Output,
  Signal,
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
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BouncingButtonComponent } from '@gv-cv/angular-ui-buttons';
import { ToastMessage, ToastsService } from '@gv-cv/angular-ui-toasts';

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
  public readonly SUCCESS_MESSAGE: TranslationKey = 'pdfExportToasts.success';
  public readonly ERROR_MESSAGE: TranslationKey = 'pdfExportToasts.error';

  private readonly exportService = inject(PdfExportService);
  private readonly translateService = inject(TranslateService);
  private readonly toastsService: ToastsService | null = inject(ToastsService, {
    optional: true,
  });

  @Input({ required: true }) public fileName!: string;
  @Input() public exportTimeoutMs: number = this.DEFAULT_EXPORT_TIMEOUT_MS;
  @Output() public exportError = new EventEmitter<{ error: Error }>();

  private pendingSignal = signal(false);

  private destroyed$ = new Subject<void>();

  public get isPending(): Signal<boolean> {
    return this.pendingSignal.asReadonly();
  }

  public export(): void {
    this.pendingSignal.set(true);
    this.exportService
      .currentPageToPdf(this.fileName)
      .pipe(
        timeout({ each: this.DEFAULT_EXPORT_TIMEOUT_MS }),
        finalize(() => {
          this.pendingSignal.set(false);
        }),
        takeUntil(this.destroyed$),
      )
      .subscribe({
        next: () => {
          this.showSuccessToast();
        },
        error: (error) => {
          this.showErrorToast();
          this.exportError.next({ error: error });
        },
      });
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private showSuccessToast(): void {
    this.showToast({
      message: this.translateService.instant(this.SUCCESS_MESSAGE),
      severity: 'primary',
    });
  }

  private showErrorToast(): void {
    this.showToast({
      message: this.translateService.instant(this.ERROR_MESSAGE),
      severity: 'error',
    });
  }

  private showToast(message: ToastMessage): void {
    if (!this.toastsService) {
      return;
    }

    this.toastsService.show(message);
  }
}
