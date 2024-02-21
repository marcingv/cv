import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
} from '@nestjs/terminus';
import { ApiTags } from '@nestjs/swagger';

@Controller('healthcheck')
@ApiTags('HealthCheck')
export class HealthcheckController {
  public constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  public check() {
    return this.health.check([
      () =>
        this.http.pingCheck(
          'api-doc',
          `http://localhost:${process.env['PORT']}/api/doc`,
        ),
    ]);
  }
}
