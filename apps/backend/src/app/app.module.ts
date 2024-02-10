import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CvController } from './cv.controller';
import { CvDataService } from './cv-data.service';
import { ExportController } from './export.controller';

@Module({
  imports: [],
  controllers: [AppController, CvController, ExportController],
  providers: [AppService, CvDataService],
})
export class AppModule {}
