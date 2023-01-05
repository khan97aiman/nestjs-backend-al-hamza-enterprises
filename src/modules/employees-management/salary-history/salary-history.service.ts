import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { SalaryHistory } from './entities/salary-history.entity';

@Injectable()
export class SalaryHistoryService extends TypeOrmCrudService<SalaryHistory> {
  constructor(@InjectRepository(SalaryHistory) repo) {
    super(repo);
  }
}
  