import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string; time: number } {
    return { message: 'Hello API', time: Date.now() };
  }
}
