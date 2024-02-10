import { Pipe, PipeTransform } from '@angular/core';
import { GroupedSkillsKey } from '../models/grouped-skills-key';
import { Skill } from '@gv-cv/data-models';

@Pipe({
  name: 'groupSkillsByCategory',
  standalone: true,
})
export class GroupSkillsByCategoryPipe implements PipeTransform {
  public transform(skills: Skill[]): Map<GroupedSkillsKey, Skill[]> {
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

    return groups;
  }
}
