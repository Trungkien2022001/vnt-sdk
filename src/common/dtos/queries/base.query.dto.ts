import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';
import { DEFAULT_PAGINATION } from '../../constants/config.constant';

export class BaseQueryDto {
  @ApiProperty({
    type: Number,
    required: false,
    example: 1,
    description: 'The page number, starting from 1',
  })
  @Transform(({ value }) => (isNaN(value) || value < 1 ? DEFAULT_PAGINATION.PAGE : Number(value)))
  @IsInt()
  @Min(1)
  @IsOptional()
  page: number;

  @ApiProperty({
    type: Number,
    required: false,
    example: 10,
    description: 'The number of items per page, minimum value is 1',
  })
  @IsOptional()
  @Transform(({ value }) => (isNaN(value) || value < 1 ? DEFAULT_PAGINATION.PAGE_SIZE : Number(value)))
  @IsInt()
  @Min(1)
  page_size: number;
}
