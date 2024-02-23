import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskedPhone',
  standalone: true,
})
export class MaskedPhonePipe implements PipeTransform {
  private readonly SEPARATOR_CHAR = ' ';

  public transform(phoneNumber: string | null | undefined): string {
    if (!phoneNumber) {
      return '';
    }

    const parts = phoneNumber.trim().split(this.SEPARATOR_CHAR);

    for (let i = 1; i < parts.length - 1; i++) {
      parts[i] = parts[i]
        .split('')
        .map(() => '*')
        .join('');
    }

    return parts.join(this.SEPARATOR_CHAR);
  }
}
