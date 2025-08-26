import { Module } from '@nestjs/common';
import { ShambaNotificationController } from './shamba_notification.controller';
import { ShambaNotificationService } from './shamba_notification.service';

@Module({
  imports: [],
  controllers: [ShambaNotificationController],
  providers: [ShambaNotificationService],
})
export class ShambaNotificationModule {}
