import { createParamDecorator } from '@nestjs/common';

export const Token = createParamDecorator((data, req) => {
  return req.header('X-App-Token');
});