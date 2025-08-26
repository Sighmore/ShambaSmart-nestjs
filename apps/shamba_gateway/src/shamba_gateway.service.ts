import { Injectable } from '@nestjs/common';

@Injectable()
export class ShambaGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
