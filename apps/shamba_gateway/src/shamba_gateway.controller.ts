/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* apps/gateway/src/shamba_gateway.controller.ts */
import { Controller, Post, Body } from '@nestjs/common';
import { ShambaGatewayService } from './shamba_gateway.service';
import { LoginDto } from 'common/libs/dtos/loginDto';
import { SignupDto } from 'common/libs/dtos/signupDto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('ShambaSmart Gateway')
@Controller('gateway')
export class ShambaGatewayController {
  constructor(private readonly gatewayService: ShambaGatewayService) {}

  // AUTH routes
  @Post('auth/login')
  @ApiOperation({ summary: 'Authenticate a user via Auth microservice' }) 
  login(@Body() body: LoginDto) {
    return this.gatewayService.loginAuth(body);
  }

  @Post('auth/register')
  @ApiOperation({ summary: 'Register a user via Auth microservice' })
  register(@Body() body: SignupDto) {
    return this.gatewayService.registerAuth(body);
  }
}
