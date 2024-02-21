import { Module } from '@nestjs/common';
import { FeatureExportModule } from '@gv-cv/nestjs-feature-export';
import { FeatureCvModule } from '@gv-cv/nestjs-feature-cv';
import { FeatureHealthcheckModule } from '@gv-cv/nestjs-feature-healthcheck';
import { HelloController } from './hello.controller';
import { FeatureGraphqlModule } from '@gv-cv/nestjs-feature-graphql';

@Module({
  imports: [
    FeatureCvModule,
    FeatureExportModule,
    FeatureHealthcheckModule,
    FeatureGraphqlModule,
  ],
  controllers: [HelloController],
  providers: [],
})
export class AppModule {}
