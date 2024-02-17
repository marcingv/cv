import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthcheckController } from './controllers/healthcheck.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HealthcheckController],
  providers: [],
  exports: [],
})
export class FeatureHealthcheckModule {}
