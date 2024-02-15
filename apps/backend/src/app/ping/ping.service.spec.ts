import { Test } from '@nestjs/testing';
import { PingService } from './ping.service';

describe('PingService', () => {
  let service: PingService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [PingService],
    }).compile();

    service = app.get<PingService>(PingService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const data = service.getData();
      expect(data.message).toEqual('Hello API');
      expect(data.time).toBeTruthy();
    });
  });
});
