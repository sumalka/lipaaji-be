import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNewArrivalDto } from './dto/create-new-arrival.dto';

@Injectable()
export class NewArrivalsService {
  constructor(private readonly prisma: PrismaService) {}

  async createArrival(createDto: CreateNewArrivalDto) {
    return this.prisma.arrival.create({
      data: {
        name: createDto.name,
        price: createDto.price,
        imageUrl: createDto.imageUrl,
        payment: createDto.payment,
        discount: createDto.discount,
        collection: createDto.collection
      },
    });
  }

  async findAll() {
    return this.prisma.arrival.findMany();
  }
}