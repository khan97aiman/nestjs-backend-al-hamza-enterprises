import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AdvanceSalary } from './entities/advance-salary.entity';

@Injectable()
export class AdvanceSalaryService extends TypeOrmCrudService<AdvanceSalary> {
  constructor(@InjectRepository(AdvanceSalary) repo) {
    super(repo);
  }
}
  