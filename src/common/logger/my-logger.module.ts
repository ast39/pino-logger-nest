import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { MyLoggerService } from './my-logger.service';
import { pinoConfigAsParams } from './mutators/logger.mutator';
import { LoggerFileConfig } from './lib/logger-file.config';

@Module({
  imports: [
    LoggerModule.forRoot(
      pinoConfigAsParams(new LoggerFileConfig().getConfig()),
    ),
  ],
  providers: [MyLoggerService],
  exports: [MyLoggerService],
})
export class MyLoggerModule {}
