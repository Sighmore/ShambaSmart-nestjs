import { Module } from '@nestjs/common';
import { ShambaPaymentController } from './shamba_payment.controller';
import { ShambaPaymentService } from './shamba_payment.service';

@Module({
  imports: [],
  controllers: [ShambaPaymentController],
  providers: [ShambaPaymentService],
})
export class ShambaPaymentModule {}
