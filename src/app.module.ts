import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [ProductsModule, UsersModule, CommonModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
