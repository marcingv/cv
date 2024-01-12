import { DateString } from '../../data-access/api/models';
import { Skill } from './skill';

export interface JobExperience {
  from: DateString;
  to?: DateString;
  company: string;
  role: string;
  description: string;
  usedSkills: Skill[];
}
