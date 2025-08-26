import { NestFactory } from '@nestjs/core';
import { ShambaNotificationModule } from './shamba_notification.module';

async function bootstrap() {
  const app = await NestFactory.create(ShambaNotificationModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
