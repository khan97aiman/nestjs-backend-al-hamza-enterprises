import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Attendance } from '../attendance/entities/attendance.entity';
import { AdvanceSalary } from '../advance-salary/entities/advance-salary.entity';
import { Leave } from '../leaves/entities/leave.entity';
import { Overtime } from '../overtime/entities/overtime.entity';
import { SalaryHistory } from '../salary-history/entities/salary-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Attendance, AdvanceSalary, Leave, Overtime, SalaryHistory])],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}
