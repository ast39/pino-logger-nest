import { Module } from '@nestjs/common';
import { join } from 'path';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { MyLoggerModule } from './common/logger/my-logger.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join('.env'),
    }),
    MyLoggerModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
