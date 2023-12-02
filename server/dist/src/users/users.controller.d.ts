import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getRank(): Promise<User[] | null>;
    findUser(id: string): Promise<User[] | null>;
    updateUserProfile(id: string, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    deleteUser(id: string): Promise<import("typeorm").UpdateResult>;
}
