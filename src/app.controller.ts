import { Controller, Get } from '@nestjs/common';
import { MyLoggerService } from './common/logger/my-logger.service';

@Controller('app')
export class AppController {
  logger = new MyLoggerService();
  constructor() {}

  @Get('hello')
  index(): void {
    this.logger.log(
      {
        user_id: 11,
        password: 'qwerty',
        age: 39,
      },
      AppController.name,
    );

    console.log('=== getHello ===');
  }
}
