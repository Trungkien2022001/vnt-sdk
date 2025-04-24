import { applyDecorators } from '@nestjs/common';
import { TStandardError } from '../common/constants';
import { StandardErrorsSwagger } from './standard-error.swagger';

export function VNT_StandardAPIErrorResponse(types?: TStandardError[]) {
  let decorators: any[];
  if (!types) {
    decorators = Object.keys(StandardErrorsSwagger).map(key => StandardErrorsSwagger[key]);
  } else {
    decorators = types.map(type => StandardErrorsSwagger[type]).filter(decorator => decorator !== null);
  }

  return applyDecorators(...decorators);
}
