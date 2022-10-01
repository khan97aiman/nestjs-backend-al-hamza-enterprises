import { PartialType } from '@nestjs/swagger';
import { CreateAdvanceSalaryDto } from './create-advance-salary.dto';

export class UpdateAdvanceSalaryDto extends PartialType(CreateAdvanceSalaryDto) {}
