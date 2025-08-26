import { Test, TestingModule } from '@nestjs/testing';
import { ShambaAuthController } from './shamba_auth.controller';
import { ShambaAuthService } from './shamba_auth.service';

describe('ShambaAuthController', () => {
  let shambaAuthController: ShambaAuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShambaAuthController],
      providers: [ShambaAuthService],
    }).compile();

    shambaAuthController = app.get<ShambaAuthController>(ShambaAuthController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(shambaAuthController.getHello()).toBe('Hello World!');
    });
  });
});
