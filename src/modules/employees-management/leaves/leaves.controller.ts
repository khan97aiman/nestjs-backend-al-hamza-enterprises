import { Controller } from '@nestjs/common';
import { LeavesService } from './leaves.service';
import { CreateLeafDto } from './dto/create-leaf.dto';
import { UpdateLeafDto } from './dto/update-leaf.dto';
import { ApiTags } from '@nestjs/swagger';
import { Leave } from './entities/leave.entity';
import { Crud } from '@nestjsx/crud';

@Crud({
  model: {
    type: Leave,
  },
  dto: {
    create: CreateLeafDto,
    update: UpdateLeafDto,
  },
})

@ApiTags('leaves')
@Controller('leaves')
export class LeavesController {
  constructor(private readonly service: LeavesService) {}
}
