import { Test, TestingModule } from '@nestjs/testing';
import { FiliacaoService } from './filiacao.service';

describe('FiliacaoService', () => {
  let service: FiliacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiliacaoService],
    }).compile();

    service = module.get<FiliacaoService>(FiliacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
