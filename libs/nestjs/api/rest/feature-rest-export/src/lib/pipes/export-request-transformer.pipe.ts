import { Injectable, PipeTransform } from '@nestjs/common';
import { PdfExportRequestDto } from '@gv-cv/nestjs-data-access-rest-export';
import { PdfExportUrlSanitizer } from '../utils/pdf-export-url-sanitizer';

@Injectable()
export class ExportRequestTransformerPipe implements PipeTransform {
  public transform(dto: PdfExportRequestDto) {
    if (dto.url) {
      dto.url = new PdfExportUrlSanitizer().sanitizeUrl(dto.url);
    }

    return dto;
  }
}
