import { IsString, IsNumber, IsOptional, IsUrl } from 'class-validator';

export class CreateNewArrivalDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  originalPrice?: number;

  @IsUrl()
  imageUrl: string;

  @IsOptional()
  @IsString()
  payment?: string;

  @IsOptional()
  @IsString()
  discount?: string;

  @IsString()
  collection: string;
}