import { ChangeDetectorRef, inject, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslationKey } from '@gv-cv/angular-util-translations';

@Pipe({
  name: 'timeSpanDuration',
  standalone: true,
  pure: false,
})
export class TimeSpanDurationPipe implements PipeTransform {
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

  public transform(value: {
    from: Date | string | number;
    to?: Date | string | number;
  }): string {
    const { from, to } = value;

    const fromDate: Date = this.toDate(from);
    const toDate: Date = to ? this.toDate(to) : new Date();

    const msDiff: number = toDate.getTime() - fromDate.getTime();
    const daysDiff: number = msDiff / 1000 / 3600 / 24;
    const monthsDiff: number = daysDiff / 30;
    const yearsDiff: number = monthsDiff / 12;

    let data: { diff: number; label: TranslationKey } = {
      diff: Math.floor(daysDiff),
      label: 'timeSpan.days',
    };

    if (yearsDiff > 1) {
      data = {
        diff: Math.floor(yearsDiff),
        label: 'timeSpan.years',
      };
    } else if (monthsDiff > 1) {
      data = {
        diff: Math.floor(monthsDiff),
        label: 'timeSpan.months',
      };
    }

    return `${data.diff} ${this.translateService.instant(data.label)}`;
  }

  private toDate(value: Date | string | number): Date {
    if (typeof value === 'string' || typeof value === 'number') {
      return new Date(value);
    }

    return value;
  }
}
