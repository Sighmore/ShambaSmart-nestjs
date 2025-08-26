import { Module } from '@nestjs/common';
import { ShambaAuthController } from './shamba_auth.controller';
import { ShambaAuthService } from './shamba_auth.service';

@Module({
  imports: [],
  controllers: [ShambaAuthController],
  providers: [ShambaAuthService],
})
export class ShambaAuthModule {}
