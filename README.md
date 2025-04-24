# VNT-SDK v1.0.0

The [vnt-sdk](https://www.facebook.com/kien.nguyen.2022001/) library exported as a Utilities module.

## Installation

Using npm:
```shell
$ npm i -g npm
$ npm i --save vnt-sdk
```

In Node.js:
```js
// Load the full build.
import * as vnt from 'vnt-sdk';

// Load the specific function.
import { VNT_StandardApiHeaders } from 'vnt-sdk';
import { VNT_StandardApiQueries } from 'vnt-sdk';
import { VNT_StandardAPIErrorResponse } from 'vnt-sdk';
import { VNT_APIErrorResponse } from 'vnt-sdk';
import { VNT_StandardApiHeaders } from 'vnt-sdk';
import { VNT_GetValidationNestedException } from 'vnt-sdk';

// Using decorator
@Post()
@ApiOperation({ summary: 'Something' })
@ApiBody({
    type: RequestDto,
    required: true,
    description: 'RequestDto',
})
@ApiResponse({
    status: 200,
    description: 'Successfully!.',
    type: ResponseDTO,
})
@VNT_StandardApiHeaders()
@VNT_APIErrorResponse(['PERMISSION_DENIED'])
@VNT_StandardAPIErrorResponse()
async addPassengers(@Req() req: Request, @Body() body: BodyDto): Promise<ResponseDTO> {
    return doSomethingLogic(req, body);
}
```

**Note:**<br>
Install using node 12 hehehe!

## Why VNT-SDK?

`VNT-SDK` provides a collection of modular utility functions to simplify the development of NestJS-based APIs. It helps standardize headers, query validation, and API error responses across services.
You can import only what you need