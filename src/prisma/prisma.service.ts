import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

dotenv.config(); // Load .env file

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  // Clean database helper (optional - for testing)
  async cleanDatabase() {
    if (process.env.NODE_ENV === 'production') return;
    
    const models = Reflect.ownKeys(this).filter((key) => key[0] !== '_');
    
    return Promise.all(
      models.map((modelKey) => {
        try {
          return this[modelKey].deleteMany();
        } catch (error) {
          console.error(`Error cleaning model ${String(modelKey)}:`, error);
        }
      })
    );
  }
}