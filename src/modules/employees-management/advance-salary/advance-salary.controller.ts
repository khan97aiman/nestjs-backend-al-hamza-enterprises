import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { AdvanceSalaryService } from './advance-salary.service';
import { CreateAdvanceSalaryDto } from './dto/create-advance-salary.dto';
import { UpdateAdvanceSalaryDto } from './dto/update-advance-salary.dto';
import { AdvanceSalary } from './entities/advance-salary.entity';

@Crud({
  model: {
    type: AdvanceSalary,
  },
  dto: {
    create: CreateAdvanceSalaryDto,
    update: UpdateAdvanceSalaryDto,
  },
})
@ApiTags('advance-salary')
@Controller('advance-salary')
export class AdvanceSalaryController {
  constructor(private readonly service: AdvanceSalaryService) {}
}
