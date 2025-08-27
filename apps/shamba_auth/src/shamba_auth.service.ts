import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from 'common/libs/dtos/loginDto';
import { SignupDto } from 'common/libs/dtos/signupDto';

@Injectable()
export class ShambaAuthService {
  constructor(private readonly configService: ConfigService) {}

  getJwtSecret() {
    return this.configService.get<string>('JWT_SECRET');
  }

  async login(_loginDto: LoginDto) {}
  async register(_signupDto: SignupDto) {}
}
