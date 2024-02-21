import { Test, TestingModule } from '@nestjs/testing';
import { HealthcheckController } from './healthcheck.controller';
import { HttpHealthIndicator, TerminusModule } from '@nestjs/terminus';

const httpHealthIndicatorMock: Partial<HttpHealthIndicator> = {
  pingCheck: jest.fn(),
};

describe('HealthcheckController', () => {
  let controller: HealthcheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TerminusModule],
      controllers: [HealthcheckController],
      providers: [
        { provide: HttpHealthIndicator, useValue: httpHealthIndicatorMock },
      ],
    }).compile();

    controller = module.get<HealthcheckController>(HealthcheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Api Doc health', () => {
    it('should be healthy when Api Doc is UP', async () => {
      const pingCheckSpy = jest.spyOn(httpHealthIndicatorMock, 'pingCheck');
      pingCheckSpy.mockResolvedValue({
        'api-doc': {
          status: 'up',
        },
      });

      const result = await controller.check();

      expect(result).toBeTruthy();
      expect(pingCheckSpy).toHaveBeenCalledWith(
        'api-doc',
        `http://localhost:${process.env['PORT']}/api/doc`,
      );
      expect(result.status).toEqual('ok');
    });
  });
});
