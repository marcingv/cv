import { PdfExportRequest } from '@gv-cv/shared-util-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';

export class PdfExportRequestDto implements PdfExportRequest {
  @ApiProperty({ example: 'http://localhost:4200/pl' })
  @IsNotEmpty()
  @IsUrl(
    {
      host_blacklist: ['localhost'],
      require_tld: false,
      require_protocol: true,
      require_valid_protocol: true,
    },
    { message: 'Invalid or unsupported URL' },
  )
  url!: string;
}
