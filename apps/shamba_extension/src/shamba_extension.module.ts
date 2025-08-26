import { Module } from '@nestjs/common';
import { ShambaExtensionController } from './shamba_extension.controller';
import { ShambaExtensionService } from './shamba_extension.service';

@Module({
  imports: [],
  controllers: [ShambaExtensionController],
  providers: [ShambaExtensionService],
})
export class ShambaExtensionModule {}
