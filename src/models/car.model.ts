import { timestamp } from "rxjs";
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: 'cars'})
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  power: string;

  @Column()
  weight: number;

  @CreateDateColumn({type: 'timestamp'})
  created_at: Date; 
}
