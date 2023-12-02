import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  user_pk: number;

  @Column()
  id: string;

  @Column()
  pwd: string;

  @Column()
  total_coin: number;

  @Column()
  available_coin: number;

  @Column()
  nickname: string;

  @Column()
  profile_img: string;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column()
  release_course: string;
}
