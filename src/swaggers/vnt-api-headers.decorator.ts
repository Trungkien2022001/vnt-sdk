import { applyDecorators } from '@nestjs/common';
import { ApiHeaders } from '@nestjs/swagger';
import { head } from 'lodash';
import { REQUEST_HEADERS } from '../common/constants';

export type TRequestHeader = keyof typeof REQUEST_HEADERS;

export function VNT_StandardApiHeaders(...headers: TRequestHeader[]) {
    if (!headers || !headers.length) {
        headers = Object.keys(REQUEST_HEADERS) as TRequestHeader[];
    }
    const headerOptions = headers.map((header) => {
        switch (header.toLowerCase()) {
            case REQUEST_HEADERS.ACCEPT_LANGUAGE:
                return {
                    name: REQUEST_HEADERS.ACCEPT_LANGUAGE,
                    required: false,
                    schema: { type: 'string' },
                };
            case REQUEST_HEADERS.AUTHORIZATION:
                return {
                    name: REQUEST_HEADERS.AUTHORIZATION,
                    required: true,
                    schema: { type: 'string' },
                };
            case REQUEST_HEADERS.USER_AGENT:
                return {
                    name: REQUEST_HEADERS.USER_AGENT,
                    required: true,
                    schema: { type: 'string' },
                };
            case REQUEST_HEADERS.X_FORWARDED_FOR:
                return {
                    name: REQUEST_HEADERS.X_FORWARDED_FOR,
                    required: true,
                    schema: { type: 'string' },
                };
            default:
                return;
        }
    }).filter(i => i);

    return applyDecorators(ApiHeaders(headerOptions));
}
