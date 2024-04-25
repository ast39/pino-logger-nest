import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { MyLoggerMiddleware } from './common/logger/middlewares/my-logger.middleware';
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MyLoggerMiddleware).forRoutes('*');
  }
}
