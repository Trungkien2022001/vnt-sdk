import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { REQUEST_QUERIES } from '../common/constants';

export type TRequestQuery = keyof typeof REQUEST_QUERIES;

export function VNT_StandardApiQueries(...params: TRequestQuery[]) {
    const paramOptions = params.map((param) => {
        switch (param.toLowerCase()) {
            case REQUEST_QUERIES.PAGE:
                return {
                    name: REQUEST_QUERIES.PAGE,
                    required: false,
                    schema: { type: 'number' },
                    example: 1,
                };
            case REQUEST_QUERIES.PAGE_SIZE:
                return {
                    name: REQUEST_QUERIES.PAGE_SIZE,
                    required: false,
                    schema: { type: 'number' },
                    example: 10,
                };
            case REQUEST_QUERIES.TYPE:
                return {
                    name: REQUEST_QUERIES.TYPE,
                    required: false,
                    schema: { type: 'string' },
                    example: 'active',
                };
            case REQUEST_QUERIES.STATUS:
                return {
                    name: REQUEST_QUERIES.STATUS,
                    required: false,
                    schema: { type: 'string' },
                    example: 'active',
                };
            case REQUEST_QUERIES.KEYWORD:
                return {
                    name: REQUEST_QUERIES.KEYWORD,
                    required: false,
                    schema: { type: 'string' },
                    example: 'active',
                };
            default:
                return null;
        }
    }).filter(i => i);

    return applyDecorators(...paramOptions.map(option => ApiQuery(option)));
}
