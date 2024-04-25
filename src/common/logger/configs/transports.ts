import { PinoConfig } from './pino.config';
import { TransportTargetOptions } from 'pino';
import * as crypto from 'crypto';

// uuid запроса
const uuid = crypto.randomUUID();

// транспорт логирования в файл
export const file: TransportTargetOptions = {
  target: 'pino/file',
  options: {
    genReqId: uuid,
    autoLogging: true,
    destination: PinoConfig.LOG_PATH + 'output.log',
    mkdir: PinoConfig.LOG_MKDIR,
    sync: PinoConfig.PINO_SYNC,
    minLength: PinoConfig.LOG_MIN_LENGTH,
    translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
  },
};

// транспорт логирования в консоль
export const console: TransportTargetOptions = {
  target: 'pino-pretty',
  options: {
    genReqId: uuid,
    autoLogging: true,
    colorize: PinoConfig.PINO_COLORIZE,
    translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
  },
};
