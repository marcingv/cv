import { Module } from '@nestjs/common';
import { MaintenanceController } from './maintenance.controller';

@Module({
  controllers: [MaintenanceController],
  providers: [],
  exports: [],
})
export class FeatureRestMaintenanceModule {}
