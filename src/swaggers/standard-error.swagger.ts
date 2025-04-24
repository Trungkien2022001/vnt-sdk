import {
    ApiBadRequestResponse,
    ApiForbiddenResponse,
    ApiInternalServerErrorResponse,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { EStandardError } from '../common/constants';
import {
    BadRequestResponseDto,
    ForbiddenResponseDto,
    InternalServerErrorResponseDto,
    UnauthorizedResponseDto,
} from '../common/dtos';

export const StandardErrorsSwagger = {
    [EStandardError.UNAUTHORIZED]: ApiUnauthorizedResponse({
        status: 401,
        description: 'Unauthorized',
        type: UnauthorizedResponseDto,
    }),
    [EStandardError.FORBIDDEN]: ApiForbiddenResponse({
        status: 403,
        description: 'Forbidden',
        type: ForbiddenResponseDto,
    }),
    [EStandardError.INTERNAL_SERVER_ERROR]: ApiInternalServerErrorResponse({
        status: 500,
        description: 'Internal Server Error',
        type: InternalServerErrorResponseDto,
    }),
    [EStandardError.BAD_REQUEST]: ApiBadRequestResponse({
        status: 400, // HTTP 400 for Bad Request
        description: 'Bad Request',
        type: BadRequestResponseDto,
    }),
};
