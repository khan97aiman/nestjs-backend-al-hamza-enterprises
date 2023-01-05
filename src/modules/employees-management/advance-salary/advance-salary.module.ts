import { Module } from '@nestjs/common';
import { AdvanceSalaryService } from './advance-salary.service';
import { AdvanceSalaryController } from './advance-salary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvanceSalary } from './entities/advance-salary.entity';
import { Employee } from '../employees/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, AdvanceSalary])],
  controllers: [AdvanceSalaryController],
  providers: [AdvanceSalaryService]
})
export class AdvanceSalaryModule {}
