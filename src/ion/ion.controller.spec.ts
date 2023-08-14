import { Test, TestingModule } from '@nestjs/testing';
import { IonController } from './ion.controller';

describe('IonController', () => {
  let controller: IonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IonController],
    }).compile();

    controller = module.get<IonController>(IonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
