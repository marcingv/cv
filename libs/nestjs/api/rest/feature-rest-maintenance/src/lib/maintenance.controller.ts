import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiProperty, ApiTags } from '@nestjs/swagger';

class TerminateServerDto {
  @ApiProperty() message!: string;
  @ApiProperty() time!: number;
}

@Controller('maintenance')
@ApiTags('Maintenance')
export class MaintenanceController {
  private readonly MILLIS_TO_TERMINATE = 1100;

  @Get('terminate')
  @ApiOkResponse({ type: TerminateServerDto })
  public terminateServer(): TerminateServerDto {
    setTimeout(() => {
      process.exit(1);
    }, this.MILLIS_TO_TERMINATE);

    return {
      message: 'Server will terminate shortly...',
      time: Date.now(),
    };
  }
}
