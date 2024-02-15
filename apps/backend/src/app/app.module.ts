import { Module } from '@nestjs/common';
import { PingController } from './ping/ping.controller';
import { PingService } from './ping/ping.service';
import { CvController } from './cv/cv.controller';
import { CvDataService } from './cv/cv-data.service';
import { ExportController } from './export/controllers/export.controller';
import { PdfExportService } from './export/services/pdf-export.service';

@Module({
  imports: [],
  controllers: [PingController, CvController, ExportController],
  providers: [PingService, CvDataService, PdfExportService],
})
export class AppModule {}
