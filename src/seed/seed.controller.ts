import { Controller, Get, UseGuards } from '@nestjs/common';
import { SeedService } from './seed.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}
  @UseGuards(AuthGuard())
  @Get()
  executeSeed() {
    return this.seedService.runSeed();
  }
}
