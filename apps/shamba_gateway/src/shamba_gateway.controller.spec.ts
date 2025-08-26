import { Test, TestingModule } from '@nestjs/testing';
import { ShambaGatewayController } from './shamba_gateway.controller';
import { ShambaGatewayService } from './shamba_gateway.service';

describe('ShambaGatewayController', () => {
  let shambaGatewayController: ShambaGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShambaGatewayController],
      providers: [ShambaGatewayService],
    }).compile();

    shambaGatewayController = app.get<ShambaGatewayController>(
      ShambaGatewayController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(shambaGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
