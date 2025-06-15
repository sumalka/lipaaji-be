// src/upload/upload.controller.ts
import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor(private configService: ConfigService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const result = await this.configService.getCloudinary().uploader.upload(file.path, {
      folder: 'lipaaji/new-arrivals', // Optional: organizes images in Cloudinary
      public_id: `${Date.now()}_${file.originalname}`, // Unique name
    });
    return { url: result.secure_url }; // Returns public URL
  }
}