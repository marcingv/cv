import { Module } from '@nestjs/common';
import { CvController } from './cv.controller';
import { CvDataService } from './cv-data.service';

@Module({
  controllers: [CvController],
  providers: [CvDataService],
  exports: [],
})
export class FeatureCvModule {}
