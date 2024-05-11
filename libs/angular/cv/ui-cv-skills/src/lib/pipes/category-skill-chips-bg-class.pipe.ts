import { Pipe, PipeTransform } from '@angular/core';
import { GroupedSkillsKey } from '../models';
import { SkillCategory } from '@gv-cv/shared-util-types';

@Pipe({
  name: 'categorySkillChipsBgClass',
  standalone: true,
})
export class CategorySkillChipsBgClassPipe implements PipeTransform {
  private readonly ODD_CSS_CLASS: string = 'bg-gray-700 dark:bg-gray-900';
  private readonly EVEN_CSS_CLASS: string = 'bg-gray-500 dark:bg-gray-700';

  private readonly CSS_CLASSES: Record<GroupedSkillsKey, string> = {
    frontend: this.ODD_CSS_CLASS,
    backend: this.EVEN_CSS_CLASS,
    tests: this.ODD_CSS_CLASS,
    databases: this.EVEN_CSS_CLASS,
    methodology: this.ODD_CSS_CLASS,
    'no-category': this.EVEN_CSS_CLASS,
  };

  public transform(category: GroupedSkillsKey | SkillCategory): string {
    return this.CSS_CLASSES[category];
  }
}
