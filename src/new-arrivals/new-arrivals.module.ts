import { Module } from '@nestjs/common';
import { NewArrivalsService } from './new-arrivals.service';
import { NewArrivalsController } from './new-arrivals.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NewArrivalsController],
  providers: [NewArrivalsService],
})
export class NewArrivalsModule {}