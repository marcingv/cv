import { EducationExperience } from '@gv-cv/shared-util-types';
import { ApiProperty } from '@nestjs/swagger';

export class EducationExperienceDto implements EducationExperience {
  @ApiProperty() name!: string;
  @ApiProperty({ required: false }) description?: string | undefined;
  @ApiProperty() from!: string;
  @ApiProperty({ required: false }) to?: string | undefined;
}
