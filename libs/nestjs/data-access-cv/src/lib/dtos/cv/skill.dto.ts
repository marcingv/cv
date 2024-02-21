import { Skill, SkillCategory } from '@gv-cv/shared-util-types';
import { ApiProperty } from '@nestjs/swagger';

export class SkillDto implements Skill {
  @ApiProperty() name!: string;
  @ApiProperty({ required: false }) description?: string | undefined;
  @ApiProperty({ required: false, type: 'string' }) category?:
    | SkillCategory
    | undefined;
  @ApiProperty({ required: false }) advancementLevel?: number | undefined;
}
