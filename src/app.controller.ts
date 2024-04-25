import { Controller, Get } from '@nestjs/common';
import { MyLoggerService } from './common/logger/my-logger.service';

@Controller('app')
export class AppController {
  private logger;
  constructor(logger: MyLoggerService) {
    this.logger = logger;
  }

  @Get('hello')
  index(): void {
    this.logger.log({ test1: 'test' });
    console.log('=== getHello ===');
  }
}
