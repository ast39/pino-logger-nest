import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { MyLoggerService } from '../my-logger.service';

@Injectable()
export class MyLoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: MyLoggerService) {}

  use(req: Request, res: Response, next: () => void) {
    const { method, url, headers, body } = req;

    this.logger.log(`Incoming Request: ${method} ${url}`, 'PmpLogger');
    this.logger.log('Headers:', 'PmpLogger');
    this.logger.log(headers, 'PmpLogger');
    this.logger.log('Body:', 'PmpLogger');
    this.logger.log(body, 'PmpLogger');

    next();
  }
}
