import { Module } from '@nestjs/common';
import { CvDataRepository } from './services';

@Module({
  controllers: [],
  providers: [CvDataRepository],
  exports: [CvDataRepository],
})
export class DataAccessModule {}
