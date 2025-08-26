import { Controller, Get } from '@nestjs/common';
import { ShambaContactUsService } from './shamba_contact_us.service';

@Controller()
export class ShambaContactUsController {
  constructor(
    private readonly shambaContactUsService: ShambaContactUsService,
  ) {}

  @Get()
  getHello(): string {
    return this.shambaContactUsService.getHello();
  }
}
