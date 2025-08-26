import { Test, TestingModule } from '@nestjs/testing';
import { ShambaPaymentController } from './shamba_payment.controller';
import { ShambaPaymentService } from './shamba_payment.service';

describe('ShambaPaymentController', () => {
  let shambaPaymentController: ShambaPaymentController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShambaPaymentController],
      providers: [ShambaPaymentService],
    }).compile();

    shambaPaymentController = app.get<ShambaPaymentController>(
      ShambaPaymentController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(shambaPaymentController.getHello()).toBe('Hello World!');
    });
  });
});
