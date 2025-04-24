import { ApiResponse } from '@nestjs/swagger';
import { ERROR } from '../common/constants';
import { BaseErrorResponseDto } from '../common/dtos';
const VntErrors = {};
Object.keys(ERROR).map((key, index) => {
    VntErrors[key] = ApiResponse({
        status: 3000 + index,
        description: ERROR[key],
        type: BaseErrorResponseDto,
    });
});

export const VntErrorsSwagger = VntErrors;
