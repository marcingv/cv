import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';

@Module({
  controllers: [HelloController],
  providers: [],
  exports: [],
})
export class FeatureRestHelloModule {}
