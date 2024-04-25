import pino from 'pino';
import { PinoConfig } from './pino.config';
import { fileTransport } from './transport.config';
import { IncomingMessage, ServerResponse } from 'http';
import { Params } from 'nestjs-pino';

export const LoggerFileConfig: Params = {
  forRoutes: ['*'],
  exclude: [],
  pinoHttp: {
    // статус логирования
    enabled: true,

    // формат даты в логах
    timestamp: pino.stdTimeFunctions.isoTime,

    // минимальный уровень критичности лога, с которого лог будет работать
    level: PinoConfig.PINO_LOG_LEVEL,

    // кастомные уровни критичности
    customLevels: PinoConfig.PINO_CUSTOM_LEVELS,

    // форматирование данных конфига
    formatters: {
      level: (label) => {
        return { level: label.toUpperCase() };
      },
    },

    // ключи-исключения для логирования
    redact: {
      paths: PinoConfig.REDACT_EXCLUDE,
      censor: '******',
      remove: false,
    },

    // сериализация данных
    serializers: {
      req: (request: IncomingMessage) => ({
        method: request.method,
        url: request.url,
        headers: request.headers,
        body: request['raw']['body'],
      }),
      res: (reply: ServerResponse) => ({
        statusCode: reply.statusCode,
      }),
      err: (err) => ({
        err,
      }),
    },

    // транспорт для логирования
    transport: fileTransport,
  },
};
