import { DateString } from '../../dtos';

export interface EducationExperience {
  name: string;
  description?: string;
  from: DateString;
  to?: DateString;
}
