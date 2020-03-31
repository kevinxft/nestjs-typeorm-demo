import { Injectable } from '@nestjs/common';
import { PoetryEntity } from './poetry.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PoetryService {
  constructor(
    @InjectRepository(PoetryEntity, 'gsc')
    private readonly poetryRepository: Repository<PoetryEntity>,
  ) {}

  async findAll(): Promise<PoetryEntity[]> {
    return await this.poetryRepository.find({
      take: 10,
    });
  }
}
