import { Injectable } from '@nestjs/common';

@Injectable()
export class ShambaAuthService {
  getHello(): string {
    return 'Hello World!';
  }
}
