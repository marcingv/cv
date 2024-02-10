import { Skill } from './skill';
import { DateString } from './date-string';

export interface JobExperience {
  from: DateString;
  to?: DateString;
  company: string;
  role: string;
  description: string;
  usedSkills: Skill[];
}
