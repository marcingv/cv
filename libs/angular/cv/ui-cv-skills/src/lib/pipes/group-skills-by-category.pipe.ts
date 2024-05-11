import { Pipe, PipeTransform } from '@angular/core';
import { GroupedSkillsKey } from '../models';
import { Skill } from '@gv-cv/shared-util-types';

@Pipe({
  name: 'groupSkillsByCategory',
  standalone: true,
})
export class GroupSkillsByCategoryPipe implements PipeTransform {
  private readonly CATEGORIES_PRIORITIES: Record<GroupedSkillsKey, number> = {
    frontend: 1,
    backend: 2,
    tests: 3,
    databases: 4,
    methodology: 5,
    'no-category': 6,
  };

  public transform(
    skills: Skill[],
  ): Array<{ category: GroupedSkillsKey; skills: Skill[] }> {
    const groups: Map<GroupedSkillsKey, Skill[]> = new Map<
      GroupedSkillsKey,
      Skill[]
    >();

    skills.forEach((oneSkill: Skill) => {
      const groupCategoryKey: GroupedSkillsKey =
        oneSkill.category ?? 'no-category';
      let groupSkills: Skill[] | undefined = groups.get(groupCategoryKey);

      if (!groupSkills) {
        groupSkills = [];
        groups.set(groupCategoryKey, groupSkills);
      }

      groupSkills.push(oneSkill);
    });

    const sortedCategories = Array.from(groups.keys()).sort(this.sorter);

    return sortedCategories.map((category: GroupedSkillsKey) => {
      return {
        category: category,
        skills: groups.get(category) ?? [],
      };
    });
  }

  private sorter = (a: GroupedSkillsKey, b: GroupedSkillsKey): number => {
    if (this.CATEGORIES_PRIORITIES[a] < this.CATEGORIES_PRIORITIES[b]) {
      return -1;
    } else if (this.CATEGORIES_PRIORITIES[a] > this.CATEGORIES_PRIORITIES[b]) {
      return 1;
    } else {
      return 0;
    }
  };
}
