import { ProjectExperience } from '@gv-cv/shared-util-types';
import { SkillDto } from './skill.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ProjectExperienceDto implements ProjectExperience {
  @ApiProperty() name!: string;
  @ApiProperty({ required: false }) companyName?: string | undefined;
  @ApiProperty() role!: string;
  @ApiProperty() description!: string;
  @ApiProperty() responsibilities!: string[];
  @ApiProperty() from!: string;
  @ApiProperty({ required: false }) to?: string | undefined;
  @ApiProperty({ type: [SkillDto] }) usedSkills?: SkillDto[] | undefined;
}
