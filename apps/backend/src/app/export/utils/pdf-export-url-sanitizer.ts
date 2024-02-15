export class PdfExportUrlSanitizer {
  public readonly PATTERN_ENV_PARAM = 'PDF_GENERATOR_HOSTNAME_REPLACE_RULES';

  private readonly hostnameReplaceRules: {
    [hostnameToReplace: string]: string;
  };

  public constructor() {
    this.hostnameReplaceRules = this.parseRules(
      process.env[this.PATTERN_ENV_PARAM] || '',
    );
  }

  public sanitizeUrl(url: string): string {
    const parsedUrl = new URL(url.trim());

    if (this.hostnameReplaceRules[parsedUrl.hostname]) {
      parsedUrl.hostname = this.hostnameReplaceRules[parsedUrl.hostname];
    }

    return parsedUrl.toString();
  }

  private parseRules(rules: string) {
    return rules.split(',').reduce(
      (previousValue, currentValue) => {
        const tokens = currentValue.split('=');
        if (tokens.length === 2) {
          previousValue[tokens[0]] = tokens[1];
        }

        return previousValue;
      },
      {} as { [key: string]: string },
    );
  }
}
