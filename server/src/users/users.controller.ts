import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';

@Controller('user')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('ranking')
  async getRank(): Promise<User[] | null> {
    return this.userService.getRank();
  }

  @Get('profile')
  async findUser(@Query('id') id: string): Promise<User[] | null> {
    return this.userService.findUser(id);
  }

  @Put('profile')
  async updateUserProfile(
    @Query('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUserProfile(id, updateUserDto);
  }

  @Post('new')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Delete()
  deleteUser(@Query('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
