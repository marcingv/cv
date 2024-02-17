import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller';

describe('HelloController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [HelloController],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<HelloController>(HelloController);
      const response = appController.getData();

      expect(response.message).toEqual('Hello from API');
      expect(response.time).toBeTruthy();
    });
  });
});
