import { EmployeeData } from './employee-data';
import { EducationExperience } from './education-experience';
import { JobExperience } from './job-experience';
import { ProjectExperience } from './project-experience';
import { LanguageExperience } from './language-experience';
import { LangCode } from '../translations';
import { Consents } from './consents';
import { Course } from './course';

export interface CvData {
  lang: LangCode;
  employee: EmployeeData;
  education: EducationExperience[];
  jobs: JobExperience[];
  projects: ProjectExperience[];
  languages: LanguageExperience[];
  courses: Course[];
  consents: Consents;
}
