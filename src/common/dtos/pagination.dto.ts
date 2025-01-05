import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number) // ESTA PROPIEDAD CAMBIA EL TIPO DE DATO
  limit?: number;
  @IsOptional()
  @Min(0)
  @Type(() => Number)
  offset?: number;
}
