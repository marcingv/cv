import { Injectable } from '@nestjs/common';

@Injectable()
export class PingService {
  getData(): { message: string; time: number } {
    return { message: 'Hello API', time: Date.now() };
  }
}
