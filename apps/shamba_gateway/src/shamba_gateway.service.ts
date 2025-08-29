/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, Inject, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { LoginDto } from 'common/libs/dtos/loginDto';
import { SignupDto } from 'common/libs/dtos/signupDto';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ShambaGatewayService implements OnModuleInit {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

 async onModuleInit() {
    this.authClient.subscribeToResponseOf('auth.register');
    this.authClient.subscribeToResponseOf('auth.login');
    await this.authClient.connect();
    console.log('✅ Auth client connected and subscribed to reply topics');
  }

  async loginAuth(loginDto: LoginDto) {
    Logger.log(`👉 Sending loginDto to auth service: ${loginDto.email}`);
    return lastValueFrom(this.authClient.send('auth.login', loginDto));
  }

  async registerAuth(signupDto: SignupDto) {
    Logger.log(`👉 Sending signupDto to auth service: ${signupDto.email}`);
    return lastValueFrom(this.authClient.send('auth.register', signupDto));
  }
}
