import { Logger } from '@nestjs/common';
import { PinoConfig } from './configs/pino.config';
import pino from 'pino';

export class MyLoggerService extends Logger {
  private readonly logger;

  constructor() {
    super();

    const transport = pino.transport({
      targets: [
        {
          target: 'pino/file',
          options: {
            destination: './src/common/logger/logs/output.log',
            mkdir: PinoConfig.LOG_MKDIR,
            colorize: PinoConfig.PINO_COLORIZE,
            sync: PinoConfig.PINO_SYNC,
            minLength: PinoConfig.LOG_MIN_LENGTH,
          },
        },
        {
          target: 'pino-pretty',
          options: { destination: './src/common/logger/logs/output.log' },
        },
      ],
    });

    this.logger = pino(
      {
        customLevels: PinoConfig.PINO_CUSTOM_LEVELS,
        level: PinoConfig.PINO_LOG_LEVEL,
        formatters: {
          level: (label) => {
            return { level: label.toUpperCase() };
          },
        },
        redact: {
          paths: PinoConfig.REDACT_EXCLUDE,
          censor: '******',
          remove: false,
        },
      },
      transport,
    );
    this.logger = this.logger.child({ from: 'global-middleware' });
  }

  verbose(message: any, context?: string) {
    super.verbose(message, context);
  }

  debug(message: any, context?: string) {
    super.debug(message, context);
  }

  log(message: any, context?: string) {
    super.log(message, context);
  }

  warn(message: any, context?: string) {
    super.warn(message, context);
  }

  error(message: any, stack?: string, context?: string) {
    super.error(message, stack, context);
  }

  fatal(message: any, stack?: string, context?: string) {
    super.error(message, stack, context);
  }
}
