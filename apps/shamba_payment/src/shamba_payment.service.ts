import { Injectable } from '@nestjs/common';

@Injectable()
export class ShambaPaymentService {
  getHello(): string {
    return 'Hello World!';
  }
}
