import { Controller, Get, Param } from '@nestjs/common';
import { CvDataService } from './cv-data.service';
import { CvDataDto } from '@gv-cv/nestjs-data-access';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';

@Controller('cv')
export class CvController {
  public constructor(private readonly service: CvDataService) {}

  @Get(':lang')
  @ApiParam({
    name: 'lang',
    example: 'pl',
  })
  @ApiOkResponse({ type: CvDataDto })
  public async getData(@Param('lang') lang: 'pl' | 'en'): Promise<CvDataDto> {
    return await this.service.getData(lang);
  }
}
