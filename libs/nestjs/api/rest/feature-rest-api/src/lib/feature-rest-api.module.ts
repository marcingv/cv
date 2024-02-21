import { Module } from '@nestjs/common';
import { FeatureRestCvModule } from '@gv-cv/nestjs-feature-rest-cv';
import { FeatureRestHealthcheckModule } from '@gv-cv/nestjs-feature-rest-healthcheck';
import { FeatureRestHelloModule } from '@gv-cv/nestjs-feature-rest-hello';
import { FeatureRestExportModule } from '@gv-cv/nestjs-feature-rest-export';

@Module({
  imports: [
    FeatureRestHelloModule,
    FeatureRestCvModule,
    FeatureRestExportModule,
    FeatureRestHealthcheckModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class FeatureRestApiModule {}
