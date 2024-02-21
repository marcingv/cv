import { Module } from '@nestjs/common';
import { CvController } from './cv.controller';
import { DataAccessModule } from '@gv-cv/nestjs-data-access-cv';

@Module({
  imports: [DataAccessModule],
  controllers: [CvController],
  providers: [],
  exports: [],
})
export class FeatureCvModule {}
