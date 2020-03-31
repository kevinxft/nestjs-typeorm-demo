import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'gsc', schema: 'poetries' })
export class PoetryEntity {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  trad_paragraphs: string[];

  @Column()
  paragraphs: string[];

  @Column()
  strains: string[];

  @Column()
  author: string;

  @Column()
  title: string;

  @Column()
  trad_author: string;

  @Column()
  trad_title: string;

  @Column()
  era: string;
}
