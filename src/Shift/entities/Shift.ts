import { ApiProperty } from "@nestjs/swagger";
import { BaseSqlEntity } from "src/Common/BaseSqlEntity";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Shift extends BaseSqlEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    title: 'name',
    description: 'name of shift',
    example: 'Morning Shift',
  })
  @Column()
  name: string;

  @ApiProperty({
    title: 'date',
    description: 'Date of shift',
    example: '10/01/2021',
  })
  @CreateDateColumn({
    name: 'date',
    type: process.env.NODE_ENV === 'test' ? 'datetime' : 'timestamp',
    precision: 0,
  })
  date: Date;

  @ApiProperty({
    title: 'startTime',
    description: 'Start time of Shift',
    example: '10/01/2021 01:00:00'
  })
  @CreateDateColumn({
    name: 'start_time',
    type: process.env.NODE_ENV === 'test' ? 'datetime' : 'timestamp',
    precision: 0,
  })
  startTime: Date;

  @ApiProperty({
    title: 'endTime',
    description: 'End time of Shift',
    example: '10/01/2021 03:00:00'
  })
  @CreateDateColumn({
    name: 'end_time',
    type: process.env.NODE_ENV === 'test' ? 'datetime' : 'timestamp',
    precision: 0,
  })
  endTime: Date;

}
