import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiProperty, ApiTags } from '@nestjs/swagger';

class ApiHelloDto {
  @ApiProperty() message!: string;
  @ApiProperty() time!: number;
}

@Controller()
export class HelloController {
  @Get()
  @ApiOkResponse({ type: ApiHelloDto })
  @ApiTags('Root')
  public getData(): ApiHelloDto {
    return { message: 'Hello from API', time: Date.now() };
  }
}
