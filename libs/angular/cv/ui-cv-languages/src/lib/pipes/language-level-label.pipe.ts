import { Pipe, PipeTransform } from '@angular/core';
import { LanguageLevel } from '@gv-cv/shared-util-types';
import { TranslationKey } from '@gv-cv/angular-util-translations';

@Pipe({
  name: 'languageLevelLabel',
  standalone: true,
})
export class LanguageLevelLabelPipe implements PipeTransform {
  private readonly LABELS: Record<LanguageLevel, TranslationKey> = {
    native: 'languageLevels.labels.native',
    A1: 'languageLevels.labels.A1',
    A2: 'languageLevels.labels.A2',
    B1: 'languageLevels.labels.B1',
    B2: 'languageLevels.labels.B2',
    C1: 'languageLevels.labels.C1',
    C2: 'languageLevels.labels.C2',
  };

  public transform(level: LanguageLevel): TranslationKey {
    return this.LABELS[level];
  }
}
