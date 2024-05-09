import { ContactData } from '@gv-cv/shared-util-types';
import { ApiProperty } from '@nestjs/swagger';

export class ContactDataDto implements ContactData {
  @ApiProperty() country!: string;
  @ApiProperty() city!: string;
  @ApiProperty({ required: false }) phone?: string | undefined;
  @ApiProperty({ required: false }) email?: string | undefined;
  @ApiProperty({ required: false }) github?: string | undefined;
  @ApiProperty({ required: false }) www?: string | undefined;
}
