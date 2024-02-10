import { Controller, Get, Res } from '@nestjs/common';
import RenderPdf from 'chrome-headless-render-pdf';
import fs, { createReadStream } from 'fs';
import * as os from 'os';
import { Response } from 'express';

@Controller('export')
export class ExportController {
  @Get('pdf')
  public async exportPdf(@Res() res: Response) {
    const url = 'http://localhost:4200/en';
    // const url = 'https://docs.nestjs.com/techniques/streaming-files';

    const suffix = Math.random();
    const tempFilePath = os.tmpdir() + `/pdf-${suffix}.pdf`;

    try {
      console.warn('wtf');
      await RenderPdf.generateSinglePdf(url, tempFilePath, {
        includeBackground: true,
        noMargins: true,
        chromeOptions: ['--chrome-option=--no-sandbox'],
      });

      console.warn('wtf');
      const fileStream = createReadStream(tempFilePath);
      fileStream.addListener('close', () => {
        fs.unlinkSync(tempFilePath);
        console.warn('after unlink');
      });
      fileStream.pipe(res);
    } catch (e) {
      console.warn('blond', e);
    }
  }
}
