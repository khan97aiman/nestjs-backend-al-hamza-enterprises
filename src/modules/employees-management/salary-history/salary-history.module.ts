import { Module } from '@nestjs/common';
import { SalaryHistoryService } from './salary-history.service';
import { SalaryHistoryController } from './salary-history.controller';
import { SalaryHistory } from './entities/salary-history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../employees/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, SalaryHistory])],
  controllers: [SalaryHistoryController],
  providers: [SalaryHistoryService]
})
export class SalaryHistoryModule {}
