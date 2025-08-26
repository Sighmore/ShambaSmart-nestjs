import { NestFactory } from '@nestjs/core';
import { ShambaAuthModule } from './shamba_auth.module';

async function bootstrap() {
  const app = await NestFactory.create(ShambaAuthModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
