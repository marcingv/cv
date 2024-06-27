import { Pipe, PipeTransform } from '@angular/core';
import { LanguageLevel } from '@gv-cv/shared-util-types';
import { TranslationKey } from '@gv-cv/angular-util-translations';

@Pipe({
  name: 'languageLevelDescription',
  standalone: true,
})
export class LanguageLevelDescriptionPipe implements PipeTransform {
  private readonly LABELS: Record<LanguageLevel, TranslationKey> = {
    native: 'languageLevels.descriptions.native',
    A1: 'languageLevels.descriptions.A1',
    A2: 'languageLevels.descriptions.A2',
    B1: 'languageLevels.descriptions.B1',
    B2: 'languageLevels.descriptions.B2',
    C1: 'languageLevels.descriptions.C1',
    C2: 'languageLevels.descriptions.C2',
  };

  public transform(level: LanguageLevel): TranslationKey {
    return this.LABELS[level];
  }
}
