import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Query,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    console.log(body, 'this is the body');
    return this.usersService.signup(body);
  }

  // @Post('/signin')
  // createUser(@Body() body: CreateUserDto) {
  //   console.log(body, 'this is the body');
  //   return this.usersService.signin(body);
  // }

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
