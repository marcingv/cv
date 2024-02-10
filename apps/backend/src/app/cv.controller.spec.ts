import { Test, TestingModule } from '@nestjs/testing';
import { CvController } from './cv.controller';
import { CvDataService } from './cv-data.service';

describe('CvController', () => {
  let controller: CvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CvController],
      providers: [CvDataService],
    }).compile();

    controller = module.get<CvController>(CvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
