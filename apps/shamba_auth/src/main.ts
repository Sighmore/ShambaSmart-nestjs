// apps/auth/src/main.ts
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ShambaAuthModule } from './shamba_auth.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ShambaAuthModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'auth-service',
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'auth-service-consumer', // unique per service
        },
      },
    },
  );

  await app.listen();
  console.log('🚀 Auth microservice running and connected to Kafka');
}
bootstrap();
