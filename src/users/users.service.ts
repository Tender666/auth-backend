import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.repo.create(createUserDto);
    return this.repo.save(user);
  }

  findOne(id: string): Promise<User | null> {
    return this.repo.findOne({ where: { id } });
  }

  findByEmail(email: string): Promise<User | null> {
    return this.repo.findOne({ where: { email } });
  }

  async update(email: string, attrs: Partial<User>) {
    const user = await this.findByEmail(email);
    if (!user) throw new NotFoundException('User not found');
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(email: string) {
    const user = await this.findByEmail(email);
    if (!user) throw new NotFoundException('User not found');
    return this.repo.remove(user);
  }
}
