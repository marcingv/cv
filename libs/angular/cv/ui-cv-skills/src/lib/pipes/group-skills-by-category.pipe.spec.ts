import { GroupSkillsByCategoryPipe } from './group-skills-by-category.pipe';
import { Skill } from '@gv-cv/shared-util-types';
import { GroupedSkillsKey } from '../models';

describe('GroupSkillsByCategoryPipe', () => {
  let pipe: GroupSkillsByCategoryPipe;

  const skills: Skill[] = [
    { name: 'front 1', category: 'frontend' },
    { name: 'front 2', category: 'frontend' },
    { name: 'backend', category: 'backend' },
    { name: 'database 1', category: 'databases' },
    { name: 'database 2', category: 'databases' },
    { name: 'methodology 1', category: 'methodology' },
    { name: 'methodology 2', category: 'methodology' },
    { name: 'other 1' },
    { name: 'other 2' },
  ];

  beforeEach(() => {
    pipe = new GroupSkillsByCategoryPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should group skills by category', () => {
    const grouped = pipe.transform(skills);

    expect(grouped).toBeInstanceOf(Array);
    expect(grouped).toHaveLength(5);

    grouped.forEach((oneGroup) => {
      expect(oneGroup.category).toBeTruthy();
      expect(oneGroup.skills).toBeTruthy();
      expect(oneGroup.skills.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('should order groups by category importance', () => {
    const grouped = pipe.transform(skills);

    expect(grouped[0].category).toEqual('frontend' satisfies GroupedSkillsKey);
    expect(grouped[1].category).toEqual('backend' satisfies GroupedSkillsKey);
    expect(grouped[2].category).toEqual('databases' satisfies GroupedSkillsKey);
    expect(grouped[3].category).toEqual(
      'methodology' satisfies GroupedSkillsKey,
    );
    expect(grouped[4].category).toEqual(
      'no-category' satisfies GroupedSkillsKey,
    );
  });
});
