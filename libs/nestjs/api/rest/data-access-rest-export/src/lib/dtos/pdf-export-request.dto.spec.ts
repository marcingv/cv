import { PdfExportRequestDto } from './pdf-export-request.dto';
import { validate } from 'class-validator';

describe('PdfExportRequestDto', () => {
  describe('url property validation', () => {
    it.each(['', undefined, null, 'not-an-url', 'http://'])(
      '%p should be invalid url',
      async (inputUrl) => {
        const dto = new PdfExportRequestDto();
        dto.url = inputUrl as string;

        const urlErrors = (await validate(dto)).find(
          (oneErr) => oneErr.property === 'url',
        );

        expect(urlErrors).toBeTruthy();
      },
    );

    it('should disallow localhost', async () => {
      const dto = new PdfExportRequestDto();
      dto.url = 'http://localhost:4200/pl';

      const urlErrors = (await validate(dto)).find(
        (oneErr) => oneErr.property === 'url',
      );

      expect(urlErrors).toBeTruthy();
    });

    it.each(['http://example.com/some/path', 'https://wwww.google.com'])(
      '%p should be valid url',
      async (inputUrl) => {
        const dto = new PdfExportRequestDto();
        dto.url = inputUrl as string;

        const urlErrors = (await validate(dto)).find(
          (oneErr) => oneErr.property === 'url',
        );

        expect(urlErrors).toBeFalsy();
      },
    );
  });
});
