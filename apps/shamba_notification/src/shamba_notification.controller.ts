import { Controller, Get } from '@nestjs/common';
import { ShambaNotificationService } from './shamba_notification.service';

@Controller()
export class ShambaNotificationController {
  constructor(
    private readonly shambaNotificationService: ShambaNotificationService,
  ) {}

  @Get()
  getHello(): string {
    return this.shambaNotificationService.getHello();
  }
}
