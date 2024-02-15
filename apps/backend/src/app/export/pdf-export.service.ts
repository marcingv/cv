import { Injectable } from '@nestjs/common';
import RenderPdf from 'chrome-headless-render-pdf';
import { Readable } from 'stream';

@Injectable()
export class PdfExportService {
  private readonly A4_WIDTH_IN_INCHES: string = '8.26771654';
  private readonly A4_HEIGHT_IN_INCHES: string = '11.7';

  public async exportUrl(absoluteUrl: string): Promise<Readable> {
    const pdfBuffer = await RenderPdf.generatePdfBuffer(absoluteUrl, {
      includeBackground: true,
      noMargins: true,
      chromeOptions: ['--no-sandbox'],
      paperWidth: this.A4_WIDTH_IN_INCHES,
      paperHeight: this.A4_HEIGHT_IN_INCHES,
    });

    return Readable.from(pdfBuffer);
  }
}
