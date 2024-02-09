import { DateString } from '../../data-access/api/models';
import { Skill } from './skill';

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
