import { Injectable } from '@nestjs/common';

@Injectable()
export class ShambaContactUsService {
  getHello(): string {
    return 'Hello World!';
  }
}
