import { Controller, Get } from '@nestjs/common';
import { ShambaInputsService } from './shamba_inputs.service';

@Controller()
export class ShambaInputsController {
  constructor(private readonly shambaInputsService: ShambaInputsService) {}

  @Get()
  getHello(): string {
    return this.shambaInputsService.getHello();
  }
}
