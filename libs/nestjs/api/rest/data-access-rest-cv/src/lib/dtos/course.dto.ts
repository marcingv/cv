import { Course } from '@gv-cv/shared-util-types';
import { ApiProperty } from '@nestjs/swagger';

export class CourseDto implements Course {
  @ApiProperty()
  platform!: string;

  @ApiProperty()
  type?: string;

  @ApiProperty()
  name!: string;

  @ApiProperty()
  date!: string;

  @ApiProperty()
  certFileUrl?: string | undefined;

  @ApiProperty()
  printable!: boolean;

  @ApiProperty()
  visible!: boolean;
}
