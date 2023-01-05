import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Attendance } from './entities/attendance.entity';

@Injectable()
export class AttendanceService extends TypeOrmCrudService<Attendance> {
  constructor(@InjectRepository(Attendance) repo) {
    super(repo);
  }
}
  