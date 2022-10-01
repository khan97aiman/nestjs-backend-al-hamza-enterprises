import { Test, TestingModule } from '@nestjs/testing';
import { AdvanceSalaryService } from './advance-salary.service';

describe('AdvanceSalaryService', () => {
  let service: AdvanceSalaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdvanceSalaryService],
    }).compile();

    service = module.get<AdvanceSalaryService>(AdvanceSalaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
