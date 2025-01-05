import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.prisma.user.create({
        data: {
          ...createUserDto,
          password: bcrypt.hashSync(createUserDto.password, 10),
        },
      });
      return user;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.prisma.user.update({
        where: {
          id: id,
        },
        data: updateUserDto.password
          ? {
              ...updateUserDto,
              password: bcrypt.hashSync(updateUserDto?.password, 10),
            }
          : {
              ...updateUserDto,
            },
      });
      return user;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.user.delete({
        where: {
          id,
        },
      });
      return;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    if (error.code === 'P2002')
      throw new BadRequestException(`The ${error.meta.target} already exists`);
    if (error.code === 'P2025')
      throw new BadRequestException(`${error.meta.cause}`);
    // if (error.status === '404')
    //   throw new NotFoundException(`Product with id ${id} not found`)
    throw new InternalServerErrorException('Please check server logs');
  }
}
