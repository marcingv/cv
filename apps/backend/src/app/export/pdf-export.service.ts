import { Injectable } from '@nestjs/common';
import RenderPdf from 'chrome-headless-render-pdf';
import fs, { createReadStream } from 'fs';
import os from 'os';

@Injectable()
export class PdfExportService {
  private readonly A4_WIDTH_IN_INCHES: string = '8.26771654';
  private readonly A4_HEIGHT_IN_INCHES: string = '11.7';

  public async exportUrl(absoluteUrl: string): Promise<fs.ReadStream> {
    const suffix = Math.random();
    const tempFilePath = os.tmpdir() + `/pdf-${suffix}.pdf`;

    await RenderPdf.generateSinglePdf(absoluteUrl, tempFilePath, {
      includeBackground: true,
      noMargins: true,
      chromeOptions: ['--no-sandbox'],
      paperWidth: this.A4_WIDTH_IN_INCHES,
      paperHeight: this.A4_HEIGHT_IN_INCHES,
    });

    const fileStream = createReadStream(tempFilePath);
    fileStream.addListener('close', () => {
      fs.unlinkSync(tempFilePath);
    });

    return fileStream;
  }
}
