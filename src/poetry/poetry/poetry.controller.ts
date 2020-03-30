import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { PoetryService } from './poetry.service';

@Controller('poetry')
export class PoetryController {
  constructor(private readonly poetryService: PoetryService) {}

  @Get('list')
  async findAll(): Promise<any> {
    return await this.poetryService.findAll();
  }
}
