import { Component, inject, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfExportService } from '../../services/pdf-export.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'gv-cv-page-pdf-export',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-pdf-export.component.html',
  styleUrl: './page-pdf-export.component.scss',
})
export class PagePdfExportComponent implements OnDestroy {
  @Input({ required: true }) public fileName!: string;
  public pending = false;

  private readonly exportService = inject(PdfExportService);
  private destroyed$ = new Subject<void>();

  public export(): void {
    this.pending = true;
    this.exportService
      .currentPageToPdf(this.fileName)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        error: () => (this.pending = false),
        complete: () => (this.pending = false),
      });
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
