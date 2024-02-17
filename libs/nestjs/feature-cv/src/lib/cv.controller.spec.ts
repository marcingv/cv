import { Test, TestingModule } from '@nestjs/testing';
import { CvController } from './cv.controller';
import { CvDataService } from './cv-data.service';
import { CvData } from '@gv-cv/shared-util-types';

jest.mock('./cv-data.service');

describe('CvController', () => {
  let controller: CvController;
  let dataService: CvDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CvController],
      providers: [CvDataService],
    }).compile();

    dataService = module.get(CvDataService);
    controller = module.get<CvController>(CvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return cv for specified language', async () => {
    const getDataSpy = jest
      .spyOn(dataService, 'getData')
      .mockReturnValue(Promise.resolve({} as CvData));

    const res = await controller.getData('pl');

    expect(res).toBeTruthy();
    expect(getDataSpy).toHaveBeenCalledWith('pl');
  });
});
