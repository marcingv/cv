import { DateString } from '../../data-access/api/models';

export interface EducationExperience {
  name: string;
  description?: string;
  from: DateString;
  to?: DateString;
}
