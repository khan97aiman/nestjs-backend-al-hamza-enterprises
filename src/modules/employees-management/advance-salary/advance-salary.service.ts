import { Injectable } from '@nestjs/common';
import { CreateAdvanceSalaryDto } from './dto/create-advance-salary.dto';
import { UpdateAdvanceSalaryDto } from './dto/update-advance-salary.dto';

@Injectable()
export class AdvanceSalaryService {
  create(createAdvanceSalaryDto: CreateAdvanceSalaryDto) {
    return 'This action adds a new advanceSalary';
  }

  findAll() {
    return `This action returns all advanceSalary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} advanceSalary`;
  }

  update(id: number, updateAdvanceSalaryDto: UpdateAdvanceSalaryDto) {
    return `This action updates a #${id} advanceSalary`;
  }

  remove(id: number) {
    return `This action removes a #${id} advanceSalary`;
  }
}
