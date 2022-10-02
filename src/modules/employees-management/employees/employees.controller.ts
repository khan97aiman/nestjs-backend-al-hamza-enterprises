import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Crud } from '@nestjsx/crud';
import { Employee } from './entities/employee.entity';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Employee,
  },
  dto: {
    create: CreateEmployeeDto,
    update: UpdateEmployeeDto,
  },
})

@ApiTags('employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly service: EmployeesService) {}
}
