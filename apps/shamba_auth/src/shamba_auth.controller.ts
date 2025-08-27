// apps/auth/src/shamba_auth.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ShambaAuthService } from './shamba_auth.service';
import { LoginDto } from 'common/libs/dtos/loginDto';
import { SignupDto } from 'common/libs/dtos/signupDto';

@Controller()
export class ShambaAuthController {
  constructor(private readonly authService: ShambaAuthService) {}

  @MessagePattern('auth.login') // topic name sent from gateway
  handleLogin(@Payload() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @MessagePattern('auth.register') // topic name sent from gateway
  handleRegister(@Payload() signupDto: SignupDto) {
    return this.authService.register(signupDto);
  }
}
