import { CvData } from '@gv-cv/shared-util-types';
import { ApiProperty } from '@nestjs/swagger';
import { EmployeeDataDto } from './employee-data.dto';
import { EducationExperienceDto } from './education-experience.dto';
import { JobExperienceDto } from './job-experience.dto';
import { ProjectExperienceDto } from './project-experience.dto';
import { LanguageExperienceDto } from './language-experience.dto';

export class CvDataDto implements CvData {
  @ApiProperty()
  lang!: string;

  @ApiProperty()
  employee!: EmployeeDataDto;

  @ApiProperty({ type: [EducationExperienceDto] })
  education!: EducationExperienceDto[];

  @ApiProperty({ type: [JobExperienceDto] })
  jobs!: JobExperienceDto[];

  @ApiProperty({ type: [ProjectExperienceDto] })
  projects!: ProjectExperienceDto[];

  @ApiProperty({ type: [LanguageExperienceDto] })
  languages!: LanguageExperienceDto[];
}
