
import { applyDecorators } from '@nestjs/common';
import { TVntError } from '../common/constants';
import { VntErrorsSwagger } from './vnt-error.swagger';

export function VNT_APIErrorResponse(types?: TVntError[]) {
  let decorators: any;
  if (types && types.length) {
    decorators = types
      .map(key => VntErrorsSwagger[key])
      .filter(d => d);
    return applyDecorators(...decorators);
  } else {
    return applyDecorators();
  }
}
