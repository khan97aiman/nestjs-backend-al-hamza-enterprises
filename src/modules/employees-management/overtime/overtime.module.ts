import { Module } from '@nestjs/common';
import { OvertimeService } from './overtime.service';
import { OvertimeController } from './overtime.controller';
import { Overtime } from './entities/overtime.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../employees/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Overtime])],
  controllers: [OvertimeController],
  providers: [OvertimeService]
})
export class OvertimeModule {}
