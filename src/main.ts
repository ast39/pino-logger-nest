import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  // set basic constants
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const APP_PORT = config.get('APP_PORT') || 3000;

  // set global app prefix
  app.setGlobalPrefix(config.get('API_PREFIX'));

  // set global pipes
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  /// start application
  await app.listen(APP_PORT, () =>
    console.log(`APP started on port ${APP_PORT}`),
  );
}
bootstrap().then(() => null);
