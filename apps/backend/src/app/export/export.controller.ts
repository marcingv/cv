import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { PdfExportService } from './pdf-export.service';

@Controller('export')
export class ExportController {
  public constructor(private pdfService: PdfExportService) {}

  @Post('pdf')
  public async exportPdf(@Body() body: { url: string }, @Res() res: Response) {
    // TODO: Walidacja URL
    const isPayloadValid = !!body && 'url' in body && body.url.trim().length;
    if (!isPayloadValid) {
      throw new BadRequestException('Invalid request payload');
    }

    const url = body.url;
    try {
      const fileStream = await this.pdfService.exportUrl(url);
      fileStream.pipe(res);
    } catch (e: unknown) {
      throw new BadRequestException(`Could not export URL to pdf: ${url}`, {
        cause: e,
        description:
          typeof e === 'object' &&
          'message' in e &&
          typeof e.message === 'string'
            ? e.message
            : undefined,
      });
    }
  }

  @Get('test')
  public async testPdfExport(@Res() res: Response) {
    const url = 'https://docs.nestjs.com/techniques/streaming-files';

    try {
      const fileStream = await this.pdfService.exportUrl(url);
      fileStream.pipe(res);
    } catch (e: unknown) {
      throw new BadRequestException(`Could not export URL to pdf: ${url}`, {
        cause: e,
        description:
          typeof e === 'object' &&
          'message' in e &&
          typeof e.message === 'string'
            ? e.message
            : undefined,
      });
    }
  }
}
