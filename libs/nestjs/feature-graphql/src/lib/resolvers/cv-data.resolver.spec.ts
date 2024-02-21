import { Test, TestingModule } from '@nestjs/testing';
import { CvDataResolver } from './cv-data.resolver';
import { CvDataRepository } from '@gv-cv/nestjs-data-access';

describe('CvDataResolver', () => {
  let resolver: CvDataResolver;
  const cvRepository = {
    findAll: jest.fn(),
    findByLang: jest.fn(),
  } satisfies Partial<CvDataRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CvDataResolver,
        {
          provide: CvDataRepository,
          useValue: cvRepository,
        },
      ],
    }).compile();

    resolver = module.get<CvDataResolver>(CvDataResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
