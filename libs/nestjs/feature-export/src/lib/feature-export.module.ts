import { Module } from '@nestjs/common';
import { PdfExportService } from './services/pdf-export.service';

@Module({
  controllers: [],
  providers: [PdfExportService],
  exports: [PdfExportService],
})
export class FeatureExportModule {}
