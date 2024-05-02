import { Test, TestingModule } from '@nestjs/testing';
import { FiliacaoController } from './filiacao.controller';

describe('FiliacaoController', () => {
  let controller: FiliacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiliacaoController],
    }).compile();

    controller = module.get<FiliacaoController>(FiliacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
