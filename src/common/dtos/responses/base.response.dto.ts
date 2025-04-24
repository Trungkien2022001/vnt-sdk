import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class BaseAPIResponseDTO<T extends object | any[] | string | number> {

    @ApiProperty({
        type: String,
        description: 'Status!',
        example: 'success',
    })
    status: string;

    @ApiProperty({
        type: String,
        description: 'Message!',
        example: 'Success',
    })
    message: string;

    @ApiProperty({
        description: 'Detail response data!',
        type: Object,
        required: true,
        nullable: false,
    })
    data: T;

    @ApiProperty({
        type: String,
        description: 'Error Code!',
        example: 'CUS_VALIDATION_ERROR',
    })
    error: string;

    @ApiProperty({
        type: String,
        description: 'Response type!',
        example: 'HTML',
    })
    type: string;
}

class BasePagingResponse {
    @ApiProperty({ example: 1, description: 'Current page number' })
    @IsNumber()
    page: number;

    @ApiProperty({ example: 20, description: 'Number of items per page' })
    @IsNumber()
    pageSize: number;

    @ApiProperty({ example: 5, description: 'Total number of pages' })
    @IsNumber()
    totalPage: number;

    @ApiProperty({ example: 100, description: 'Total number of items' })
    @IsNumber()
    total: number;
}

export class BasePagingResponseDto<T extends object | any[] | string | number> {
  @ApiProperty()
  data: T;

  @ApiProperty({
    description: 'Pagination details',
    type: BasePagingResponse,
    oneOf: [{ $ref: getSchemaPath(BasePagingResponse) }],
  })
  @Type(() => BasePagingResponse)
  paging: BasePagingResponse;
}

export class BaseAPIResponse {
    @ApiProperty({
      type: Boolean,
      description: 'Status!',
      example: true,
    })
    success: boolean;
}

export class BaseResponseDto extends BaseAPIResponseDTO <BaseAPIResponse> {

    @ApiProperty({
      type: BaseAPIResponse,
      description: 'Detail response data!',
    })
    data: BaseAPIResponse;
}
