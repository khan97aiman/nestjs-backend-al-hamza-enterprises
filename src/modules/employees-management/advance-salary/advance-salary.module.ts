import { Module } from '@nestjs/common';
import { AdvanceSalaryService } from './advance-salary.service';
import { AdvanceSalaryController } from './advance-salary.controller';

@Module({
  controllers: [AdvanceSalaryController],
  providers: [AdvanceSalaryService]
})
export class AdvanceSalaryModule {}
