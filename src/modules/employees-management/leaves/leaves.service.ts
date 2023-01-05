import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Leave } from './entities/leave.entity';

@Injectable()
export class LeavesService extends TypeOrmCrudService<Leave> {
  constructor(@InjectRepository(Leave) repo) {
    super(repo);
  }
}