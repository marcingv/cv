import { UrlUtils } from './url.utils';

describe('Url Utils', () => {
  describe('Add Query Param', () => {
    it('should add query param to URL', () => {
      expect(
        UrlUtils.addQueryParam('http://localhost:4200/pl', 'printing'),
      ).toEqual('http://localhost:4200/pl?printing=');

      expect(
        UrlUtils.addQueryParam(
          'http://localhost:4200/pl?printing',
          'param1',
          'val1',
        ),
      ).toEqual('http://localhost:4200/pl?printing=&param1=val1');
    });
  });
});
