import { Controller, Get } from '@nestjs/common';
import { ShambaAuthService } from './shamba_auth.service';

@Controller()
export class ShambaAuthController {
  constructor(private readonly shambaAuthService: ShambaAuthService) {}

  @Get()
  getHello(): string {
    return this.shambaAuthService.getHello();
  }
}
