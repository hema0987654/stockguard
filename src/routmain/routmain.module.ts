import { Module } from '@nestjs/common';
import { RoutmainController } from './routmain.controller';

@Module({
  controllers: [RoutmainController]
})
export class RoutmainModule {}
