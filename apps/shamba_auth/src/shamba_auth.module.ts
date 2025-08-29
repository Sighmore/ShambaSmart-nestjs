import { Module } from '@nestjs/common';
import { ShambaAuthController } from './shamba_auth.controller';
import { ShambaAuthService } from './shamba_auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_Login } from './shamba_auth.model';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { logLevel } from 'kafkajs';

@Module({
  imports: [
    // Env vars
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),

    // DB connection
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '0702Simon#@',
        database: 'shamba_auth_db',
        entities: [User_Login],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([User_Login]),

    // JWT
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
    }),

    // Kafka consumer to handle requests from gateway
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE_CLIENT', // optional, only if you want outbound calls
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth-service',
            brokers: ['localhost:9092'], // points to your Docker Kafka
            logLevel: logLevel.ERROR,
          },
          consumer: {
            groupId: 'auth-service-consumer',
          },
        },
      },
    ]),
  ],

  controllers: [ShambaAuthController],
  providers: [ShambaAuthService],
})
export class ShambaAuthModule {}
