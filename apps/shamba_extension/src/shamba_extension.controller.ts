import { Controller, Get } from '@nestjs/common';
import { ShambaExtensionService } from './shamba_extension.service';

@Controller()
export class ShambaExtensionController {
  constructor(
    private readonly shambaExtensionService: ShambaExtensionService,
  ) {}

  @Get()
  getHello(): string {
    return this.shambaExtensionService.getHello();
  }
}
