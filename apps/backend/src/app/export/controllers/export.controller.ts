import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { PdfExportService } from '../services/pdf-export.service';
import { PdfExportUrlSanitizer } from '../utils/pdf-export-url-sanitizer';
import { ExportPdfRequestDto } from '../models';
import { ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('export')
export class ExportController {
  public constructor(private pdfService: PdfExportService) {}

  @Post('pdf')
  @ApiOkResponse()
  @ApiBadRequestResponse()
  public async exportPdf(
    @Body() body: ExportPdfRequestDto,
    @Res() res: Response,
  ) {
    // TODO: Walidacja URL
    const isPayloadValid = !!body && 'url' in body && body.url.trim().length;
    if (!isPayloadValid) {
      throw new BadRequestException('Invalid request payload');
    }

    const url = new PdfExportUrlSanitizer().sanitizeUrl(body.url);

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