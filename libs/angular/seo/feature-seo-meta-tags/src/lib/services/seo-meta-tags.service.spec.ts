import { TestBed } from '@angular/core/testing';

import { SeoMetaTagsService } from './seo-meta-tags.service';

describe('SeoMetaTagsService', () => {
  let service: SeoMetaTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoMetaTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
