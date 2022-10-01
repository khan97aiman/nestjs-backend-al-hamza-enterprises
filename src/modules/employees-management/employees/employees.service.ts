import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService extends TypeOrmCrudService<Employee> {
  constructor(@InjectRepository(Employee) repo) {
    super(repo);
  }
}
  

