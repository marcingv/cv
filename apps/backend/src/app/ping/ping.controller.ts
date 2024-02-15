import { Controller, Get } from '@nestjs/common';

import { PingService } from './ping.service';

@Controller()
export class PingController {
  constructor(private readonly appService: PingService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
