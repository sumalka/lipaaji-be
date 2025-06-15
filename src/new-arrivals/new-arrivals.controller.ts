import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { NewArrivalsService } from './new-arrivals.service';
import { CreateNewArrivalDto } from './dto/create-new-arrival.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('collections')
export class NewArrivalsController {
  constructor(private readonly newArrivalsService: NewArrivalsService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createDto: CreateNewArrivalDto) {
    return this.newArrivalsService.createArrival(createDto);
  }

  @Get()
  async findAll() {
    return this.newArrivalsService.findAll();
  }
}