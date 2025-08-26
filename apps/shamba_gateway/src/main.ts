// apps/gateway/src/main.ts
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { ShambaGatewayModule } from './shamba_gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ShambaGatewayModule);

  app.setGlobalPrefix('api');
  app.enableCors();

  // Connect the gateway to Kafka (so it can talk to microservices)
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'gateway',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'gateway-consumer',
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
  console.log('🚀 API Gateway running at http://localhost:3000/api');
}
bootstrap();
