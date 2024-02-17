import { Module } from '@nestjs/common';
import { PingController } from './ping/ping.controller';
import { PingService } from './ping/ping.service';
import { FeatureExportModule } from '@gv-cv/nestjs-feature-export';
import { FeatureCvModule } from '@gv-cv/nestjs-feature-cv';
import { FeatureHealthcheckModule } from '@gv-cv/nestjs-feature-healthcheck';

@Module({
  imports: [FeatureCvModule, FeatureExportModule, FeatureHealthcheckModule],
  controllers: [PingController],
  providers: [PingService],
})
export class AppModule {}
