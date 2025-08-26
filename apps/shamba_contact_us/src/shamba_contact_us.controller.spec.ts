import { Test, TestingModule } from '@nestjs/testing';
import { ShambaContactUsController } from './shamba_contact_us.controller';
import { ShambaContactUsService } from './shamba_contact_us.service';

describe('ShambaContactUsController', () => {
  let shambaContactUsController: ShambaContactUsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShambaContactUsController],
      providers: [ShambaContactUsService],
    }).compile();

    shambaContactUsController = app.get<ShambaContactUsController>(
      ShambaContactUsController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(shambaContactUsController.getHello()).toBe('Hello World!');
    });
  });
});
