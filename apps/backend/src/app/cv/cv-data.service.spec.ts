import { Test, TestingModule } from '@nestjs/testing';
import { CvDataService } from './cv-data.service';
import { EN_CV, PL_CV } from '@gv-cv/data-models';

describe('CvDataService', () => {
  let provider: CvDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CvDataService],
    }).compile();

    provider = module.get<CvDataService>(CvDataService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('should return polish version', async () => {
    const cv = await provider.getData('pl');

    expect(cv).toBeTruthy();
    expect(cv).toEqual(PL_CV);
  });

  it('should return english version', async () => {
    const cv = await provider.getData('en');

    expect(cv).toBeTruthy();
    expect(cv).toEqual(EN_CV);
  });

  it('should return polish version for unsupported language', async () => {
    const cv = await provider.getData('not-supported-lang' as never);

    expect(cv).toBeTruthy();
    expect(cv).toEqual(PL_CV);
  });
});
