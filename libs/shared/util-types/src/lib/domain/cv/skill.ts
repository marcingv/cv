import { SkillCategory } from './skill-category';

export interface Skill {
  name: string;
  description?: string;
  category?: SkillCategory;
  advancementLevel?: number;
}
