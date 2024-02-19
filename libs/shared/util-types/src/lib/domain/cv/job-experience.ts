import { Skill } from './skill';
import { DateString } from '../../dtos';

export interface JobExperience {
  from: DateString;
  to?: DateString;
  company: string;
  role: string;
  description: string;
  usedSkills: Skill[];
}
