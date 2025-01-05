import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  name: string;
  @IsString()
  description: string;
  @IsInt()
  @IsPositive()
  stock: number;
  @IsNumber()
  @IsPositive()
  price: number;
  @IsArray()
  @IsString({
    each: true,
  })
  sizes: string[];
  @IsString()
  slug: string;
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags: string[];
  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;
  // @ValidateNested({ each: true })
  // @Type(() => ProductImagesDto)
  // productImages: ProductImagesDto[];
  @IsArray()
  @IsString({ each: true })
  productImages: string[];
}
