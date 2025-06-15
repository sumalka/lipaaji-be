// src/app.module.ts
import { Module } from '@nestjs/common';
import { UploadController } from './upload/upload.controller';
import { ConfigService } from './config/config.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module'; // Add this

@Module({
  imports: [
    AuthModule,
    PrismaModule, // Add this
  ],
  controllers: [UploadController],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppModule {}