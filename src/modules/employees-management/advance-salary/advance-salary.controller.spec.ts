import { Test, TestingModule } from '@nestjs/testing';
import { AdvanceSalaryController } from './advance-salary.controller';
import { AdvanceSalaryService } from './advance-salary.service';

describe('AdvanceSalaryController', () => {
  let controller: AdvanceSalaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdvanceSalaryController],
      providers: [AdvanceSalaryService],
    }).compile();

    controller = module.get<AdvanceSalaryController>(AdvanceSalaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
