import { Controller, Get } from '@nestjs/common';
import { ShambaPaymentService } from './shamba_payment.service';

@Controller()
export class ShambaPaymentController {
  constructor(private readonly shambaPaymentService: ShambaPaymentService) {}

  @Get()
  getHello(): string {
    return this.shambaPaymentService.getHello();
  }
}
