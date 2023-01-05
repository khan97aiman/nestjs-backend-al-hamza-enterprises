import { Controller } from '@nestjs/common';
import { OvertimeService } from './overtime.service';
import { CreateOvertimeDto } from './dto/create-overtime.dto';
import { UpdateOvertimeDto } from './dto/update-overtime.dto';
import { ApiTags } from '@nestjs/swagger';
import { Overtime } from './entities/overtime.entity';
import { Crud } from '@nestjsx/crud';

@Crud({
  model: {
    type: Overtime,
  },
  dto: {
    create: CreateOvertimeDto,
    update: UpdateOvertimeDto,
  },
})

@ApiTags('overtime')
@Controller('overtime')
export class OvertimeController {
  constructor(private readonly service: OvertimeService) {}
}
