import { Pipe, PipeTransform } from '@angular/core';
import { Skill, SkillCategory } from '../../domain/models';

@Pipe({
  name: 'groupSkillsByCategory',
  standalone: true,
})
export class GroupSkillsByCategoryPipe implements PipeTransform {
  public transform(
    skills: Skill[],
  ): Map<SkillCategory | 'noCategory', Skill[]> {
    const groups: Map<SkillCategory | 'noCategory', Skill[]> = new Map<
      SkillCategory | 'noCategory',
      Skill[]
    >();

    skills.forEach((oneSkill: Skill) => {
      const groupCategoryKey = oneSkill.category ?? 'noCategory';
      let groupSkills: Skill[] | undefined = groups.get(groupCategoryKey);
      if (!groupSkills) {
        groupSkills = [];
        groups.set(groupCategoryKey, groupSkills);
      }

      groupSkills.push(oneSkill);
    });

    return groups;
  }
}
