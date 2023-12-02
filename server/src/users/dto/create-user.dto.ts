import {
  IsNotEmpty,
  IsString,
  Length,
  IsNumber,
  IsDate,
} from 'class-validator';
import { User } from '../entity/user.entity';

export class CreateUserDto extends User {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  @Length(10)
  pwd: string;

  @IsNotEmpty()
  @IsNumber()
  total_coin: number = 0;

  @IsNotEmpty()
  @IsNumber()
  available_coin: number = 0;

  @IsNotEmpty()
  @IsString()
  nickname: string;

  @IsNotEmpty()
  @IsNumber()
  profile_img: string;

  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @IsDate()
  deletedAt: Date;

  @IsString()
  release_course: string;
}

export class UpdateUserDto extends CreateUserDto {}
