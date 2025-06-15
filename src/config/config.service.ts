// src/config/config.service.ts
import { Injectable } from '@nestjs/common';
import * as cloudinary from 'cloudinary';

@Injectable()
export class ConfigService {
  constructor() {
    cloudinary.v2.config({
      cloud_name: 'dk1thw6tq', // Replace with your Cloudinary Cloud Name
      api_key: '635661947365961',       // Replace with your Cloudinary API Key
      api_secret: 'qiiobwogZhIwTG31Q_81pcijGBQ', // Replace with your Cloudinary API Secret
    });
  }

  getCloudinary() {
    return cloudinary.v2;
  }
}