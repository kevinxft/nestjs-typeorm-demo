import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PoetryModule } from './poetry/poetry/poetry.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), PoetryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
