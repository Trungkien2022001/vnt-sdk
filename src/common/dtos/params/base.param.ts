import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class BaseParamDto {
  @ApiProperty({
    description: 'ID',
    type: Number,
    required: true,
  })
  @Transform(v => Number(v))
  @IsNumber()
  id: number;
}
