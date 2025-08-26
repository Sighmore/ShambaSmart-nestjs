import { NestFactory } from '@nestjs/core';
import { ShambaPaymentModule } from './shamba_payment.module';

async function bootstrap() {
  const app = await NestFactory.create(ShambaPaymentModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
