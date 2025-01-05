import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const product = await this.prisma.product.create({
        data: {
          ...createProductDto,
          productImages: {
            create: createProductDto.productImages.map((url) => ({
              url,
            })),
          },
        },
      });
      return product;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    return this.prisma.product.findMany({
      skip: offset,
      take: limit,
      include: {
        productImages: true,
      },
    });
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findFirst({
      where: {
        id: id,
      },
      include: {
        productImages: true,
      },
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.prisma.product.update({
        where: {
          id: id,
        },
        data: {
          ...updateProductDto,
          productImages: updateProductDto.productImages?.length
            ? {
                deleteMany: {},
                create: updateProductDto.productImages?.map((url) => ({
                  url,
                })),
              }
            : undefined,
        },
        include: {
          productImages: true,
        },
      });
      return product;
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.$transaction(async (prisma) => {
        await prisma.productImage.deleteMany({
          where: {
            productId: id,
          },
        });

        await prisma.product.delete({
          where: {
            id: id,
          },
        });
      });
    } catch (error) {
      this.handleDBErrors(error);
    }
    return;
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
