import { Test, TestingModule } from '@nestjs/testing';
import { CvDataResolver } from './cv-data.resolver';

describe('CvDataResolver', () => {
  let resolver: CvDataResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CvDataResolver],
    }).compile();

    resolver = module.get<CvDataResolver>(CvDataResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
