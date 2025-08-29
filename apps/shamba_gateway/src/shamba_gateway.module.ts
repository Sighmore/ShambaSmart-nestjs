import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ShambaGatewayController } from './shamba_gateway.controller';
import { ShambaGatewayService } from './shamba_gateway.service';
import { logLevel } from 'kafkajs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'gateway-auth',
            brokers: ['localhost:9092'],
            logLevel: logLevel.INFO,
          },
          consumer: {
            groupId: 'gateway-auth-consumer',
          },
        },
      },
      {
        name: 'PAYMENT_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'gateway-payment',
            brokers: ['localhost:9092'],
            logLevel: logLevel.ERROR, //
          },
          consumer: {
            groupId: 'gateway-payment-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [ShambaGatewayController],
  providers: [ShambaGatewayService],
})
export class ShambaGatewayModule {}
