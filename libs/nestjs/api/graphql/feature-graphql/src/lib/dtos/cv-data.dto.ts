import { CvData, LangCode } from '@gv-cv/shared-util-types';
import { Field, ObjectType } from '@nestjs/graphql';
import { EducationExperienceDto } from './education-experience.dto';
import { JobExperienceDto } from './job-experience.dto';
import { ProjectExperienceDto } from './project-experience.dto';
import { LanguageExperienceDto } from './language-experience.dto';
import { EmployeeDataDto } from './employee-data.dto';
import { ConsentsDto } from './consents.dto';
import { CourseDto } from './course.dto';

@ObjectType()
export class CvDataDto implements CvData {
  @Field(() => String)
  lang!: LangCode;

  @Field(() => EmployeeDataDto)
  employee!: EmployeeDataDto;

  @Field(() => [EducationExperienceDto])
  education!: EducationExperienceDto[];

  @Field(() => [JobExperienceDto])
  jobs!: JobExperienceDto[];

  @Field(() => [ProjectExperienceDto])
  projects!: ProjectExperienceDto[];

  @Field(() => [LanguageExperienceDto])
  languages!: LanguageExperienceDto[];

  @Field(() => [CourseDto])
  courses!: CourseDto[];

  @Field()
  consents!: ConsentsDto;
}
