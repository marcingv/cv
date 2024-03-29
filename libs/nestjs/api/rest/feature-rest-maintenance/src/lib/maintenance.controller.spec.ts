import { Test, TestingModule } from '@nestjs/testing';
import { MaintenanceController } from './maintenance.controller';

describe('MaintenanceController', () => {
  let controller: MaintenanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaintenanceController],
    }).compile();

    controller = module.get<MaintenanceController>(MaintenanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Terminate action', () => {
    const mockProcessExit = jest
      .spyOn(process, 'exit')
      .mockImplementation(() => {
        return undefined as never;
      });

    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    afterAll(() => {
      mockProcessExit.mockRestore();
    });

    it('should abort process with delay', () => {
      controller.terminateServer();
      jest.runAllTimers();

      expect(mockProcessExit).toHaveBeenCalledWith(1);
    });

    it('should return dto info', () => {
      const response = controller.terminateServer();
      jest.runAllTimers();

      expect(response).toBeTruthy();
      expect(response.message).toBeTruthy();
      expect(response.time).toBeTruthy();
    });
  });
});
