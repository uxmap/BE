import { User } from '../entity/user.entity';
export declare class CreateUserDto extends User {
    id: string;
    pwd: string;
    total_coin: number;
    available_coin: number;
    nickname: string;
    profile_img: string;
    createdAt: Date;
    deletedAt: Date;
    release_course: string;
}
export declare class UpdateUserDto extends CreateUserDto {
}
