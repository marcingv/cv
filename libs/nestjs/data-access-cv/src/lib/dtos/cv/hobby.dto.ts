import { Hobby } from '@gv-cv/shared-util-types';
import { ApiProperty } from '@nestjs/swagger';

export class HobbyDto implements Hobby {
  @ApiProperty() name!: string;
}
