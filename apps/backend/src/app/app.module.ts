import { Module } from '@nestjs/common';
import { FeatureGraphqlModule } from '@gv-cv/nestjs-feature-graphql';
import { FeatureRestApiModule } from '@gv-cv/nestjs-feature-rest-api';

@Module({
  imports: [FeatureRestApiModule, FeatureGraphqlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
