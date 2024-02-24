import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskedEmail',
  standalone: true,
})
export class MaskedEmailPipe implements PipeTransform {
  public transform(email: string | null | undefined): string {
    if (!email) {
      return '';
    }

    const parts = email.split('@');
    const localPart = parts[0];
    const domainPart = parts[1];
    const maskedParts = [];

    if (localPart) {
      maskedParts.push(this.maskLocalPart(localPart));
    }
    if (domainPart) {
      maskedParts.push(this.maskDomainPart(domainPart));
    }

    return maskedParts.join('@');
  }

  private maskLocalPart(localPart: string): string {
    const chars = localPart.split('');

    for (let i = Math.floor(chars.length / 2); i < chars.length; i++) {
      chars[i] = '*';
    }

    return chars.join('');
  }

  private maskDomainPart(domainPart: string): string {
    const parts = domainPart.split('.');

    return parts
      .map((onePart: string, index: number) => {
        if (index === parts.length - 1) {
          return onePart;
        }

        return Array.from({ length: onePart.length })
          .map(() => '*')
          .join('');
      })
      .join('.');
  }
}
