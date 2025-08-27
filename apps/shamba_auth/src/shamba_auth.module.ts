/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Module } from '@nestjs/common';
import { ShambaAuthController } from './shamba_auth.controller';
import { ShambaAuthService } from './shamba_auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User_Login } from './shamba_auth.model';

@Module({
  imports: [
    // ✅ Load env vars for this microservice
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),

    // ✅ Database connection via TypeORM
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [User_Login],
        synchronize: true,
      }),
    }),

    // ✅ Make User repo injectable
    TypeOrmModule.forFeature([User_Login]),

    // ✅ JWT setup with env secret
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],

  controllers: [ShambaAuthController],
  providers: [ShambaAuthService],
})
export class ShambaAuthModule {}
