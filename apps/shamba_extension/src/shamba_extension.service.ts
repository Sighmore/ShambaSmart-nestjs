import { Injectable } from '@nestjs/common';

@Injectable()
export class ShambaExtensionService {
  getHello(): string {
    return 'Hello World!';
  }
}
