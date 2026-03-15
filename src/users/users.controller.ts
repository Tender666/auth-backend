import {
  Body,
  Controller,
  Get,
  Patch,
  Param,
  Query,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users') 
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.usersService.findOne(uuid);
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Patch(':email')
  updateUser(@Param('email') email: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(email, body);
  }

  @Delete(':email')
  removeUser(@Param('email') email: string) {
    return this.usersService.remove(email);
  }
}
