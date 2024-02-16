import { ApiProperty } from '@nestjs/swagger';

export class ExportPdfRequestDto {
  @ApiProperty({ example: 'http://localhost:4200' })
  url: string;
}
