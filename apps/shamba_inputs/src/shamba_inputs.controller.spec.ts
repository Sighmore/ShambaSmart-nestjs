import { Test, TestingModule } from '@nestjs/testing';
import { ShambaInputsController } from './shamba_inputs.controller';
import { ShambaInputsService } from './shamba_inputs.service';

describe('ShambaInputsController', () => {
  let shambaInputsController: ShambaInputsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShambaInputsController],
      providers: [ShambaInputsService],
    }).compile();

    shambaInputsController = app.get<ShambaInputsController>(
      ShambaInputsController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(shambaInputsController.getHello()).toBe('Hello World!');
    });
  });
});
