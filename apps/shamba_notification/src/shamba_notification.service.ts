import { Injectable } from '@nestjs/common';

@Injectable()
export class ShambaNotificationService {
  getHello(): string {
    return 'Hello World!';
  }
}
