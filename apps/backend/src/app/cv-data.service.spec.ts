import { Test, TestingModule } from '@nestjs/testing';
import { CvDataService } from './cv-data.service';

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
});
