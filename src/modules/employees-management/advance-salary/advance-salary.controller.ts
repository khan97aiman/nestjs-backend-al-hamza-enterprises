import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdvanceSalaryService } from './advance-salary.service';
import { CreateAdvanceSalaryDto } from './dto/create-advance-salary.dto';
import { UpdateAdvanceSalaryDto } from './dto/update-advance-salary.dto';

@Controller('advance-salary')
export class AdvanceSalaryController {
  constructor(private readonly advanceSalaryService: AdvanceSalaryService) {}

  @Post()
  create(@Body() createAdvanceSalaryDto: CreateAdvanceSalaryDto) {
    return this.advanceSalaryService.create(createAdvanceSalaryDto);
  }

  @Get()
  findAll() {
    return this.advanceSalaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advanceSalaryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdvanceSalaryDto: UpdateAdvanceSalaryDto) {
    return this.advanceSalaryService.update(+id, updateAdvanceSalaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.advanceSalaryService.remove(+id);
  }
}
