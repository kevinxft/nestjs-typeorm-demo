import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoetryEntity } from './poetry.entity';
import { PoetryService } from './poetry.service';
import { PoetryController } from './poetry.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PoetryEntity])],
  providers: [PoetryService],
  controllers: [PoetryController],
})
export class PoetryModule {}
