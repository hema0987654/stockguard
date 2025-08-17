import { Test, TestingModule } from '@nestjs/testing';
import { RoutmainController } from './routmain.controller';

describe('RoutmainController', () => {
  let controller: RoutmainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoutmainController],
    }).compile();

    controller = module.get<RoutmainController>(RoutmainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
