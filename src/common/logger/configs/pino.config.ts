import * as dayjs from 'dayjs';

// текущая дата
const today = dayjs().format('YY-MM-DD');

export const PinoConfig = {
  // дефолтный уровень логирования, ниже которого лог не пишется
  PINO_LOG_LEVEL: 'info',

  // кастомные уровни логирования
  PINO_CUSTOM_LEVELS: {
    critical: 70,
    apocalypse: 90,
  },

  // цветной лог
  PINO_COLORIZE: true,

  // режим синхронизации
  PINO_SYNC: true,

  // автоматически создать каталог при его отсутствии
  LOG_MKDIR: true,

  // минимальный размер буффера
  LOG_MIN_LENGTH: 4,

  // ключи-исключения, которые не логируются или скрываются
  REDACT_EXCLUDE: ['password', 'refresh_token'],

  // путь до каталога с логами
  LOG_PATH: './src/common/logger/logs/',

  // имя файла с логами
  LOG_FILE: today + '.log',
};
