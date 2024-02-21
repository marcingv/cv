import { PdfExportRequest } from '@gv-cv/shared-util-types';
import { ApiProperty } from '@nestjs/swagger';

export class PdfExportRequestDto implements PdfExportRequest {
  @ApiProperty({ example: 'http://localhost:4200/pl' })
  url!: string;
}
