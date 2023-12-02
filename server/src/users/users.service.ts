import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private UsersRepository: Repository<User>,
  ) {}

  getRank(): Promise<User[] | null> {
    return this.UsersRepository.find({
      order: {
        total_coin: 'DESC',
      },
    });
  }

  findUser(userid: string): Promise<User[] | null> {
    return this.UsersRepository.find({
      where: {
        id: userid,
      },
      take: 1,
    });
  }

  updateUserProfile(userid: string, item: User) {
    return this.UsersRepository.createQueryBuilder()
      .update(item)
      .set({
        pwd: item.pwd,
        nickname: item.nickname,
        profile_img: item.profile_img,
      })
      .where('id = :id', { userid })
      .execute();
  }

  createUser(item: User): Promise<User> {
    item.createdAt = new Date();
    item.pwd = bcrypt.hashSync(item.pwd, 10);
    return this.UsersRepository.save(item);
  }

  deleteUser(userid: string) {
    return this.UsersRepository.softDelete(userid);
  }
}
