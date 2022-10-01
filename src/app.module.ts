import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfigAsync } from './core/config/typeorm.config';
import { EmployeesModule } from './modules/employees-management/employees/employees.module';
import { AttendanceModule } from './modules/employees-management/attendance/attendance.module';
import { LeavesModule } from './modules/employees-management/leaves/leaves.module';
import { AdvanceSalaryModule } from './modules/employees-management/advance-salary/advance-salary.module';
import { OvertimeModule } from './modules/employees-management/overtime/overtime.module';
import { SalaryHistoryModule } from './modules/employees-management/salary-history/salary-history.module';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(TypeOrmConfigAsync),
    EmployeesModule,
    AttendanceModule,
    LeavesModule,
    AdvanceSalaryModule,
    OvertimeModule,
    SalaryHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
