import { ChangeDetectorRef, inject, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Pipe({
  name: 'localizedDate',
  standalone: true,
  pure: false,
})
export class LocalizedDatePipe implements PipeTransform {
  private datePipe: DatePipe = inject(DatePipe);
  private translateService: TranslateService = inject(TranslateService);
  private cd: ChangeDetectorRef = inject(ChangeDetectorRef);

  public constructor() {
    this.translateService.onLangChange
      .pipe(
        tap(() => this.cd.markForCheck()),

        takeUntilDestroyed(),
      )
      .subscribe();
  }

  public transform(
    value: Date | string | number | null | undefined,
    format?: string,
    timezone?: string,
  ): string | null {
    const locale: string =
      this.translateService.currentLang ?? this.translateService.defaultLang;

    return this.datePipe.transform(value, format, timezone, locale);
  }
}
