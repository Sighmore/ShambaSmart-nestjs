import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ShambaGatewayController } from './shamba_gateway.controller';
import { ShambaGatewayService } from './shamba_gateway.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: { clientId: 'gateway-auth', brokers: ['localhost:9092'] },
          consumer: { groupId: 'gateway-auth-consumer' },
        },
      },
      {
        name: 'PAYMENT_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: { clientId: 'gateway-payment', brokers: ['localhost:9092'] },
          consumer: { groupId: 'gateway-payment-consumer' },
        },
      },
    ]),
  ],
  controllers: [ShambaGatewayController],
  providers: [ShambaGatewayService],
})
export class ShambaGatewayModule {}
