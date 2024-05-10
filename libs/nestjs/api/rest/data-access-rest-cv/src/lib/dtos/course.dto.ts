import { Course } from '@gv-cv/shared-util-types';
import { ApiProperty } from '@nestjs/swagger';

export class CourseDto implements Course {
  @ApiProperty()
  platform!: string;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  date!: string;

  @ApiProperty()
  certFileUrl?: string | undefined;
}
