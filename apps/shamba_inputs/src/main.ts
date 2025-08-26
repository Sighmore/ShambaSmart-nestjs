import { NestFactory } from '@nestjs/core';
import { ShambaInputsModule } from './shamba_inputs.module';

async function bootstrap() {
  const app = await NestFactory.create(ShambaInputsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
