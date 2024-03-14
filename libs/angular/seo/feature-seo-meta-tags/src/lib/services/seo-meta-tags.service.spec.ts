import { TestBed } from '@angular/core/testing';
import { SeoMetaTagsService } from './seo-meta-tags.service';
import { Meta } from '@angular/platform-browser';

describe('SeoMetaTagsService', () => {
  let service: SeoMetaTagsService;
  let metaService: Partial<Meta>;

  beforeEach(() => {
    metaService = {
      getTag: jest.fn(),
      addTag: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [{ provide: Meta, useValue: metaService }],
    });

    service = TestBed.inject(SeoMetaTagsService);
    metaService = TestBed.inject(Meta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set new meta description tag', () => {
    const getTagSpy = jest.spyOn(metaService, 'getTag').mockReturnValue(null);
    const addTagSpy = jest.spyOn(metaService, 'addTag');

    service.setDescription('sample description');

    expect(getTagSpy).toHaveBeenCalled();
    expect(addTagSpy).toHaveBeenCalledWith({
      name: 'description',
      content: 'sample description',
    });
  });

  it('should update existing meta description tag content', () => {
    const existingMetaDescriptionTag: HTMLMetaElement = {
      content: 'old description',
    } as HTMLMetaElement;

    const getTagSpy = jest
      .spyOn(metaService, 'getTag')
      .mockReturnValue(existingMetaDescriptionTag);
    const addTagSpy = jest.spyOn(metaService, 'addTag');

    service.setDescription('new description');

    expect(getTagSpy).toHaveBeenCalled();
    expect(addTagSpy).not.toHaveBeenCalled();
    expect(existingMetaDescriptionTag.content).toEqual('new description');
  });
});
