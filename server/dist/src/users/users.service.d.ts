import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private UsersRepository;
    constructor(UsersRepository: Repository<User>);
    getRank(): Promise<User[] | null>;
    findUser(userid: string): Promise<User[] | null>;
    updateUserProfile(userid: string, item: User): Promise<import("typeorm").UpdateResult>;
    createUser(item: User): Promise<User>;
    deleteUser(userid: string): Promise<import("typeorm").UpdateResult>;
}
