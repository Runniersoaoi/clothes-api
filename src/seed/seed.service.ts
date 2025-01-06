import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly prisma: PrismaService) {}
  async runSeed() {
    await this.deleteTables();
    await this.insertUsers();
    await this.insertProducts();

    return `SEED EXECUTED`;
  }

  async deleteTables() {
    await this.prisma.user.deleteMany();
    await this.prisma.productImage.deleteMany();
    await this.prisma.product.deleteMany();
  }

  async insertUsers() {
    const users = initialData.users;
    for (const user of users) {
      await this.prisma.user.create({
        data: user,
      });
    }
  }

  async insertProducts() {
    const products = initialData.products;
    for (const product of products) {
      await this.prisma.product.create({
        data: {
          ...product,
          productImages: {
            create: product.productImages.map((url) => ({
              url,
            })),
          },
        },
      });
    }
  }
}
