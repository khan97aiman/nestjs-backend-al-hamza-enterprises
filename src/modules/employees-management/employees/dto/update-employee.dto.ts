import { PickType } from '@nestjs/swagger';
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateEmployeeDto extends PickType(CreateEmployeeDto, ['designation', 'mobileNo', 'netSalary'] as const) { }


