import { Consents } from '@gv-cv/shared-util-types';
import { ApiProperty } from '@nestjs/swagger';

export class ConsentsDto implements Consents {
  @ApiProperty() RODO!: string;
}
