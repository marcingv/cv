import { Module } from '@nestjs/common';
import { ExportController } from './controllers/export.controller';
import { FeatureExportModule } from '@gv-cv/nestjs-feature-export';

@Module({
  imports: [FeatureExportModule],
  controllers: [ExportController],
  providers: [],
  exports: [],
})
export class FeatureRestExportModule {}
