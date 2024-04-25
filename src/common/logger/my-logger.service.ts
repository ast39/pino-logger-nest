import { Logger } from '@nestjs/common';
import pino from 'pino';
import { PinoConfig } from './configs/pino.config';
import { console, file } from './configs/transports';
import { IncomingMessage, ServerResponse } from 'http';

export class MyLoggerService extends Logger {
  private readonly logger;

  constructor() {
    super();

    const transport = pino.transport({
      targets: [file, console],
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
        serializers: {
          req(request: IncomingMessage) {
            return {
              method: request.method,
              url: request.url,
              headers: request.headers,
              body: request['raw']['body'],
            };
          },
          res(reply: ServerResponse) {
            return {
              statusCode: reply.statusCode,
            };
          },
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
