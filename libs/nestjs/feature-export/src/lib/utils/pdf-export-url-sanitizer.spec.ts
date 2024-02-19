import { PdfExportUrlSanitizer } from './pdf-export-url-sanitizer';

describe('PdfExportUrlSanitizer', () => {
  const orgEnvs: NodeJS.ProcessEnv = { ...process.env };

  afterAll(() => {
    Object.assign(process.env, orgEnvs);
  });

  it('should be defined', () => {
    expect(new PdfExportUrlSanitizer()).toBeDefined();
  });

  describe('Sanitize url', () => {
    it('should replace hostnames in url', () => {
      process.env['PDF_GENERATOR_HOSTNAME_REPLACE_RULES'] =
        'localhost=new-host,sub.localhost=some-other-host';

      const sanitizer = new PdfExportUrlSanitizer();

      expect(sanitizer.sanitizeUrl('http://localhost:4200')).toEqual(
        'http://new-host:4200/',
      );
      expect(sanitizer.sanitizeUrl('http://sub.localhost:4200')).toEqual(
        'http://some-other-host:4200/',
      );
    });
  });
});
