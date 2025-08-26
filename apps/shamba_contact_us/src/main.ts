import { NestFactory } from '@nestjs/core';
import { ShambaContactUsModule } from './shamba_contact_us.module';

async function bootstrap() {
  const app = await NestFactory.create(ShambaContactUsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
