import { Module } from '@nestjs/common';
import { PingController } from './ping/ping.controller';
import { PingService } from './ping/ping.service';
import { CvController } from './cv/cv.controller';
import { CvDataService } from './cv/cv-data.service';
import { ExportModule } from './export/export.module';

@Module({
  imports: [ExportModule],
  controllers: [PingController, CvController],
  providers: [PingService, CvDataService],
})
export class AppModule {}
