import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { LoggerFileConfig } from './configs/logger-file.config';

@Module({
  imports: [LoggerModule.forRoot(LoggerFileConfig)],
  providers: [],
  exports: [],
})
export class MyLoggerModule {}
