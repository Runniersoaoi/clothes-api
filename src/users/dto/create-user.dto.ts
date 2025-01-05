import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  email: string;
  @IsString()
  @MinLength(8)
  password: string;
  @IsString()
  fullName: string;
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  roles?: string[];
}
