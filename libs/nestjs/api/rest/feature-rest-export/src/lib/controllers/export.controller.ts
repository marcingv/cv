import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { PdfExportService } from '@gv-cv/nestjs-feature-export';
import { PdfExportUrlSanitizer } from '../utils/pdf-export-url-sanitizer';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PdfExportRequestDto } from '@gv-cv/nestjs-data-access-rest-export';
import { ExportRequestTransformerPipe } from '../pipes/export-request-transformer.pipe';

@Controller('export')
@ApiTags('Export')
export class ExportController {
  public constructor(private pdfService: PdfExportService) {}

  @Post('pdf')
  @ApiOkResponse()
  @ApiBadRequestResponse()
  @UsePipes(ExportRequestTransformerPipe, ValidationPipe)
  public async exportPdf(
    @Body() body: PdfExportRequestDto,
    @Res() res: Response,
  ) {
    const url = new PdfExportUrlSanitizer().sanitizeUrl(body.url);

    try {
      const fileStream = await this.pdfService.exportUrl(url);
      fileStream.pipe(res);
    } catch (e: unknown) {
      throw new BadRequestException(`Could not export URL to pdf: ${url}`, {
        cause: e,
        description:
          !!e &&
          typeof e === 'object' &&
          'message' in e &&
          typeof e.message === 'string'
            ? e.message
            : undefined,
      });
    }
  }
}
