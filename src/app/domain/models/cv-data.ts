import { EmployeeData } from './employee-data';
import { EducationExperience } from './education-experience';
import { JobExperience } from './job-experience';
import { ProjectExperience } from './project-experience';
import { LanguageExperience } from './language-experience';

export interface CvData {
  employee: EmployeeData;
  education: EducationExperience[];
  jobs: JobExperience[];
  projects: ProjectExperience[];
  languages: LanguageExperience[];
}
