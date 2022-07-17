/* eslint-disable @typescript-eslint/no-unsafe-member-access,
@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-return */
import { createParamDecorator, ExecutionContext, ForbiddenException } from '@nestjs/common';

import { AuthorizerPayload, AuthorizerPayloadOptional } from '../interface/common.interface';

export const JwtPayloadExtractor = createParamDecorator((_data: unknown, ctx: ExecutionContext): AuthorizerPayload => {
  const req = ctx.switchToHttp().getRequest();
  const gw = req.apiGateway;

  if (gw) {
    const { authorizer } = gw.event.requestContext;

    if (authorizer && authorizer.payload) {
      return JSON.parse(authorizer.payload);
    }
  }

  throw new ForbiddenException();
});

export const JwtPayloadExtractorOptional = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): AuthorizerPayloadOptional => {
    const req = ctx.switchToHttp().getRequest();
    const gw = req.apiGateway;

    if (gw) {
      const { authorizer } = gw.event.requestContext;

      if (authorizer && authorizer.payload) {
        return JSON.parse(authorizer.payload);
      }
    }

    return null;
  },
);
