import { Test, TestingModule } from '@nestjs/testing';
import { PingController } from './ping.controller';
import { PingService } from './ping.service';

describe('PingController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PingController],
      providers: [PingService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<PingController>(PingController);
      const response = appController.getData();

      expect(response.message).toEqual('Hello API');
      expect(response.time).toBeTruthy();
    });
  });
});
