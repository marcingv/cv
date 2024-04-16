export class UrlUtils {
  public static addQueryParam(
    url: string,
    name: string,
    value?: string,
  ): string {
    const parsedUrl = new URL(url);

    parsedUrl.searchParams.set(name, value ?? '');

    return parsedUrl.toString();
  }
}
