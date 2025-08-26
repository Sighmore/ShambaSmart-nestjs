import { Test, TestingModule } from '@nestjs/testing';
import { ShambaNotificationController } from './shamba_notification.controller';
import { ShambaNotificationService } from './shamba_notification.service';

describe('ShambaNotificationController', () => {
  let shambaNotificationController: ShambaNotificationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShambaNotificationController],
      providers: [ShambaNotificationService],
    }).compile();

    shambaNotificationController = app.get<ShambaNotificationController>(
      ShambaNotificationController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(shambaNotificationController.getHello()).toBe('Hello World!');
    });
  });
});
