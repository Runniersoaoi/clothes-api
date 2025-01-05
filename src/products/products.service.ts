import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
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
  }

  async findAll() {
    return this.prisma.product.findMany({
      include: {
        productImages: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.product.findFirst({
      where: {
        id: id,
      },
      include: {
        productImages: true,
      },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
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
  }

  async remove(id: number) {
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
    return;
  }
}
