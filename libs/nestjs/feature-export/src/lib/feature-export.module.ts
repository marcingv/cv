import { Module } from '@nestjs/common';
import { ExportController } from './controllers/export.controller';
import { PdfExportService } from './services/pdf-export.service';

@Module({
  controllers: [ExportController],
  providers: [PdfExportService],
  exports: [],
})
export class FeatureExportModule {}
