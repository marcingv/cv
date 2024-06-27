import { LanguageExperience, LanguageLevel } from '@gv-cv/shared-util-types';
import { ApiProperty } from '@nestjs/swagger';

export class LanguageExperienceDto implements LanguageExperience {
  @ApiProperty() name!: string;
  @ApiProperty({ type: 'string' }) level!: LanguageLevel;
}
