import { Pipe, PipeTransform } from '@angular/core';
import { GroupedSkillsKey } from '../models';
import { TranslationKey } from '@gv-cv/angular-util-translations';

@Pipe({
  name: 'skillCategoryLabel',
  standalone: true,
})
export class SkillCategoryLabelPipe implements PipeTransform {
  private readonly LABELS: Record<GroupedSkillsKey, TranslationKey> = {
    frontend: 'skillCategoriesLabels.frontend',
    backend: 'skillCategoriesLabels.backend',
    tests: 'skillCategoriesLabels.tests',
    databases: 'skillCategoriesLabels.databases',
    methodology: 'skillCategoriesLabels.methodology',
    'no-category': 'skillCategoriesLabels.no-category',
  };

  public transform(category: GroupedSkillsKey): TranslationKey {
    return this.LABELS[category];
  }
}
