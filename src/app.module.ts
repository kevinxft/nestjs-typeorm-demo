import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PoetryModule } from './poetry/poetry/poetry.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'gsc',
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'gsc',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
      useUnifiedTopology: true,
    }),
    TypeOrmModule.forRoot({
      name: 'nivek',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'nivek',
      // entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    PoetryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
