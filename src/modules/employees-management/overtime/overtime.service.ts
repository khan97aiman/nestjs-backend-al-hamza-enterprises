import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Overtime } from './entities/overtime.entity';

@Injectable()
export class OvertimeService extends TypeOrmCrudService<Overtime> {
  constructor(@InjectRepository(Overtime) repo) {
    super(repo);
  }
}
  