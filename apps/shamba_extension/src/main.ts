import { NestFactory } from '@nestjs/core';
import { ShambaExtensionModule } from './shamba_extension.module';

async function bootstrap() {
  const app = await NestFactory.create(ShambaExtensionModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
