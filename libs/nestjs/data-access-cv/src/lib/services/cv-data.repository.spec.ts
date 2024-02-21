import { Test, TestingModule } from '@nestjs/testing';
import { CvDataRepository } from './cv-data.repository';
import { EN_LANG_CODE, PL_LANG_CODE } from '@gv-cv/shared-util-types';

describe('CvDataRepository', () => {
  let provider: CvDataRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CvDataRepository],
    }).compile();

    provider = module.get<CvDataRepository>(CvDataRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('should return list of cv data', async () => {
    expect((await provider.findAll()).length).toBeGreaterThan(0);
  });

  it('should return PL cv', async () => {
    const cv = await provider.findByLang(PL_LANG_CODE);

    expect(cv).toBeTruthy();
    expect(cv?.lang).toEqual(PL_LANG_CODE);
  });

  it('should return EN cv', async () => {
    const cv = await provider.findByLang(EN_LANG_CODE);

    expect(cv).toBeTruthy();
    expect(cv?.lang).toEqual(EN_LANG_CODE);
  });

  it('should return undefined for not existing lang', async () => {
    expect(await provider.findByLang('not-existing-lang')).toBeUndefined();
  });
});
