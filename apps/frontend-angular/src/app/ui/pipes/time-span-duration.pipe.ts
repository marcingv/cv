import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeSpanDuration',
  standalone: true,
})
export class TimeSpanDurationPipe implements PipeTransform {
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

    if (yearsDiff > 1) {
      return `${Math.floor(yearsDiff)} lat`;
    }

    return `${Math.floor(monthsDiff)} miesięcy`;
  }

  private toDate(value: Date | string | number): Date {
    if (typeof value === 'string' || typeof value === 'number') {
      return new Date(value);
    }

    return value;
  }
}
