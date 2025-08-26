import { Test, TestingModule } from '@nestjs/testing';
import { ShambaExtensionController } from './shamba_extension.controller';
import { ShambaExtensionService } from './shamba_extension.service';

describe('ShambaExtensionController', () => {
  let shambaExtensionController: ShambaExtensionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShambaExtensionController],
      providers: [ShambaExtensionService],
    }).compile();

    shambaExtensionController = app.get<ShambaExtensionController>(
      ShambaExtensionController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(shambaExtensionController.getHello()).toBe('Hello World!');
    });
  });
});
