import { ExportRequestTransformerPipe } from './export-request-transformer.pipe';
import { PdfExportUrlSanitizer } from '../utils/pdf-export-url-sanitizer';
import { PdfExportRequestDto } from '@gv-cv/nestjs-data-access-rest-export';

jest.mock<PdfExportUrlSanitizer>('../utils/pdf-export-url-sanitizer');

describe('ExportRequestTransformerPipe', () => {
  const pipe = new ExportRequestTransformerPipe();
  let sanitizeUrlSpy: jest.Mock;

  beforeEach(() => {
    sanitizeUrlSpy = jest.fn();

    PdfExportUrlSanitizer.prototype.sanitizeUrl = sanitizeUrlSpy;
  });

  it('should be defined', () => {
    expect(pipe).toBeDefined();
  });

  it('should sanitize URL attribute of DTO model', () => {
    const dto: PdfExportRequestDto = {
      url: 'http://localhost',
    };

    sanitizeUrlSpy.mockReturnValue('http://127.0.0.1');

    pipe.transform(dto);

    expect(sanitizeUrlSpy).toHaveBeenCalledWith('http://localhost');
    expect(dto.url).toEqual('http://127.0.0.1');
  });

  it('should not sanitize URL attribute of DTO model if attribute is empty', () => {
    const dto: PdfExportRequestDto = {
      url: '',
    };

    pipe.transform(dto);

    expect(sanitizeUrlSpy).not.toHaveBeenCalled();
    expect(dto.url).toEqual('');
  });
});
