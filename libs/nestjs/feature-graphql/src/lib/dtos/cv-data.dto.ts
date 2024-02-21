import {
  CvData,
  EducationExperience,
  EmployeeData,
  JobExperience,
  LangCode,
  LanguageExperience,
  ProjectExperience,
} from '@gv-cv/shared-util-types';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CvDataDto implements CvData {
  @Field((type) => String)
  lang!: LangCode;

  employee!: EmployeeData;
  education!: EducationExperience[];
  jobs!: JobExperience[];
  projects!: ProjectExperience[];
  languages!: LanguageExperience[];
}
