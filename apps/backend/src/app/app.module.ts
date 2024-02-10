import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CvController } from './cv.controller';
import { CvDataService } from './cv-data.service';

@Module({
  imports: [],
  controllers: [AppController, CvController],
  providers: [AppService, CvDataService],
})
export class AppModule {}
