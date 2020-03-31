import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoetryEntity } from './poetry.entity';
import { PoetryService } from './poetry.service';
import { PoetryController } from './poetry.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PoetryEntity], 'gsc')],
  providers: [PoetryService],
  controllers: [PoetryController],
})
export class PoetryModule {}
