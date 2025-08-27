import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { ShambaGatewayModule } from './shamba_gateway.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ShambaGatewayModule);

  app.setGlobalPrefix('api');
  app.enableCors();

  // ----- Swagger Setup -----
  const config = new DocumentBuilder()
    .setTitle('ShambaSmart API Gateway')
    .setDescription('Gateway for ShambaSmart microservices')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  // -------------------------

  // Connect the gateway to Kafka (so it can talk to microservices)
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'gateway',
        brokers: ['127.0.0.1:9092'],
      },
      consumer: {
        groupId: 'gateway-consumer',
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);

  console.log('🚀 API Gateway running at http://localhost:3000/api');
  console.log('📄 Swagger docs at http://localhost:3000/api/docs');
}
bootstrap();
