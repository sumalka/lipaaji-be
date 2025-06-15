// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './types'; // Import the Product interface

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('new-arrivals')
  getNewArrivals(): Product[] {
    return [
      { id: 1, name: 'New Dress', price: 29.99, imageUrl: 'https://example.com/dress.jpg' },
      { id: 2, name: 'New Jacket', price: 49.99, imageUrl: 'https://example.com/jacket.jpg' },
    ];
  }

  @Get('hello')
  getHello(): string {
    return 'Hello from backend!';
  }
}