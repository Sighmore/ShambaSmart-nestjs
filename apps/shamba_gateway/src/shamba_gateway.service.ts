/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoginDto } from 'common/libs/dtos/loginDto';
import { SignupDto } from 'common/libs/dtos/signupDto';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ShambaGatewayService {
 

  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientProxy,
    @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientProxy,
  ) {}

  async loginAuth(loginDto: LoginDto) {
    // emit a Kafka event
    return lastValueFrom(
      this.authClient.send('auth.login', loginDto) // 'auth.login' is the Kafka topic/event key
    );
  }

   async registerAuth(signupDto: SignupDto) {
    //emit a kafka event
    return lastValueFrom(
      this.authClient.send('auth.register', signupDto) //'auth.register' is the Kafka topic/event key
    );
  }
}
