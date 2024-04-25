export const PinoConfig = {
  PINO_LOG_LEVEL: 'info',
  PINO_CUSTOM_LEVELS: {
    critical: 70,
    apocalypse: 90,
  },
  PINO_COLORIZE: true,
  PINO_SYNC: true,
  LOG_MKDIR: true,
  LOG_MIN_LENGTH: 4,
  REDACT_EXCLUDE: ['password', 'refresh_token'],
};
