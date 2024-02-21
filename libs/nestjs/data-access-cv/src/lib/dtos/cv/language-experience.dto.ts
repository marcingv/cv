import { LanguageExperience } from '@gv-cv/shared-util-types';
import { ApiProperty } from '@nestjs/swagger';

export class LanguageExperienceDto implements LanguageExperience {
  @ApiProperty() name!: string;
  @ApiProperty() advancementDescription!: string;
}
