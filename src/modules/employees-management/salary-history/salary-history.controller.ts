import { Controller } from '@nestjs/common';
import { SalaryHistoryService } from './salary-history.service';
import { CreateSalaryHistoryDto } from './dto/create-salary-history.dto';
import { UpdateSalaryHistoryDto } from './dto/update-salary-history.dto';
import { ApiTags } from '@nestjs/swagger';
import { SalaryHistory } from './entities/salary-history.entity';
import { Crud } from '@nestjsx/crud';

@Crud({
  model: {
    type: SalaryHistory,
  },
  dto: {
    create: CreateSalaryHistoryDto,
    update: UpdateSalaryHistoryDto,
  },
})

@ApiTags('salary-history')
@Controller('salary-history')
export class SalaryHistoryController {
  constructor(private readonly service: SalaryHistoryService) {}
}
