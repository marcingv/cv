import { Test, TestingModule } from '@nestjs/testing';
import { PdfExportService } from './pdf-export.service';
import RenderPdf, { IRenderPdfOptions } from 'chrome-headless-render-pdf';

jest.mock('chrome-headless-render-pdf');

describe('PdfExportService', () => {
  let service: PdfExportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PdfExportService],
    }).compile();

    service = module.get<PdfExportService>(PdfExportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should render url as A4 PDF', async () => {
    const requestUrl = 'http://some-sample.url';
    const pdfBufferResult = Buffer.from('abc');

    const generatePdfSpy = jest
      .spyOn(RenderPdf, 'generatePdfBuffer')
      .mockImplementation((url, options: IRenderPdfOptions | undefined) => {
        expect(options).toBeTruthy();
        expect(url).toEqual(url);
        expect(options!.includeBackground).toBe(true);
        expect(options!.noMargins).toBe(true);
        expect(options!.chromeOptions).toContain('--no-sandbox');
        expect(options!.paperWidth).toEqual('8.26771654');
        expect(options!.paperHeight).toEqual('11.7');

        return Promise.resolve(pdfBufferResult);
      });

    const pdf = await service.exportUrl(requestUrl);

    expect(pdf).toBeTruthy();
    expect(generatePdfSpy).toHaveBeenCalled();
  });
});
