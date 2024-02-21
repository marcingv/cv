import { JobExperience } from '@gv-cv/shared-util-types';
import { SkillDto } from './skill.dto';
import { ApiProperty } from '@nestjs/swagger';

export class JobExperienceDto implements JobExperience {
  @ApiProperty() from!: string;
  @ApiProperty({ required: false }) to?: string | undefined;
  @ApiProperty() company!: string;
  @ApiProperty() role!: string;
  @ApiProperty() description!: string;
  @ApiProperty({ type: [SkillDto] }) usedSkills!: SkillDto[];
}
