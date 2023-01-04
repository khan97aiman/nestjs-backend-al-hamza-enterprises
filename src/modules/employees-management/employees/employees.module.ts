import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Attendance } from '../attendance/entities/attendance.entity';
import { AdvanceSalary } from '../advance-salary/entities/advance-salary.entity';
import { Leave } from '../leaves/entities/leave.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Attendance, AdvanceSalary, Leave])],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}
