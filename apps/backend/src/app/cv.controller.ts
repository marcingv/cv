import { Controller, Get, Param } from '@nestjs/common';
import { CvDataService } from './cv-data.service';
import { CvData } from '@gv-cv/data-models';

@Controller('cv')
export class CvController {
  public constructor(private readonly service: CvDataService) {}

  @Get(':lang')
  public getData(@Param('lang') lang): CvData {
    return this.service.getData(lang);
  }
}
