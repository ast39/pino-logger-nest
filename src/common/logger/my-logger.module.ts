import { Module } from '@nestjs/common';
import { MyLoggerService } from './my-logger.service';
import {LoggerModule} from "nestjs-pino";
import pino from 'pino';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        serializers: {
          req: (req) => ({
            body: req['raw']['body'],
            url: req['url'],
            headers: {
              host: req['raw']['headers']['host']
            },
          }),
          res: (res) => ({
            statusCode: res['statusCode'],
          }),
          err: (err) => ({
            err
          })
        },
        stream: pino.destination({
          dest: './src/common/logger/logs/test.log', // omit for stdout
          minLength: 4, // Buffer before iwriting
          sync: false,
          mkdir: true,
          append: true
        }),
      },
    }),
  ],
  controllers: [],
  providers: [MyLoggerService],
  exports: [MyLoggerService],
})
export class MyLoggerModule {}
