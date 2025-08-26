import { Injectable } from '@nestjs/common';

@Injectable()
export class ShambaInputsService {
  getHello(): string {
    return 'Hello World!';
  }
}
