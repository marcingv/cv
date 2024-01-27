import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'localizedDate',
  standalone: true,
})
export class LocalizedDatePipe implements PipeTransform {
  private datePipe: DatePipe = inject(DatePipe);
  private translateService: TranslateService = inject(TranslateService);

  public transform(
    value: Date | string | number | null | undefined,
    format?: string,
    timezone?: string,
  ): string | null {
    const locale =
      this.translateService.currentLang ?? this.translateService.defaultLang;

    return this.datePipe.transform(value, format, timezone, locale);
  }
}
