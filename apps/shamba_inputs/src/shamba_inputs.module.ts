import { Module } from '@nestjs/common';
import { ShambaInputsController } from './shamba_inputs.controller';
import { ShambaInputsService } from './shamba_inputs.service';

@Module({
  imports: [],
  controllers: [ShambaInputsController],
  providers: [ShambaInputsService],
})
export class ShambaInputsModule {}
