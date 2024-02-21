import { Test, TestingModule } from '@nestjs/testing';
import { CvController } from './cv.controller';
import { CvData } from '@gv-cv/shared-util-types';
import { CvDataRepository } from '@gv-cv/nestjs-data-access';
import { NotFoundException } from '@nestjs/common';

describe('CvController', () => {
  let controller: CvController;
  const cvRepository = {
    findAll: jest.fn(),
    findByLang: jest.fn(),
  } satisfies Partial<CvDataRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CvController],
      providers: [
        {
          provide: CvDataRepository,
          useValue: cvRepository,
        },
      ],
    }).compile();

    controller = module.get<CvController>(CvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return cv for specified language', async () => {
    cvRepository.findByLang.mockResolvedValue({} as CvData);

    const res = await controller.getData('pl');

    expect(res).toBeTruthy();
    expect(cvRepository.findByLang).toHaveBeenCalledWith('pl');
  });

  it('should throw not found exception', async () => {
    cvRepository.findByLang.mockReturnValue(undefined);

    try {
      await controller.getData('not-existing-lang');
    } catch (e) {
      expect(cvRepository.findByLang).toHaveBeenCalledWith('not-existing-lang');
      expect(e).toBeInstanceOf(NotFoundException);
    }
  });
});
