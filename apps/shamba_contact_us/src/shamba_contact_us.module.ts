import { Module } from '@nestjs/common';
import { ShambaContactUsController } from './shamba_contact_us.controller';
import { ShambaContactUsService } from './shamba_contact_us.service';

@Module({
  imports: [],
  controllers: [ShambaContactUsController],
  providers: [ShambaContactUsService],
})
export class ShambaContactUsModule {}
