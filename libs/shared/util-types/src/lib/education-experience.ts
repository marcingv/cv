import { DateString } from './date-string';

export interface EducationExperience {
  name: string;
  description?: string;
  from: DateString;
  to?: DateString;
}
