import { Skill } from './skill';
import { DateString } from './date-string';

export interface ProjectExperience {
  name: string;
  companyName?: string;
  role: string;
  description: string;
  responsibilities: string[];
  from: DateString;
  to?: DateString;
  usedSkills?: Skill[];
}
