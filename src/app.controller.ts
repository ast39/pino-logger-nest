import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  constructor() {}

  @Get('hello')
  index(): void {
    console.log('=== getHello ===');
  }
}
