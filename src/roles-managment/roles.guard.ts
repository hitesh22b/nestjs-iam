/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { ROLES_KEY } from './roles.decorator';

import { AuthorizerPayload } from '../interface/common.interface';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get(ROLES_KEY, context.getHandler());

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const { payload } = request.apiGateway.event.requestContext.authorizer;

    if (!payload) {
      return false;
    }
    const authorizerPayload = JSON.parse(payload) as AuthorizerPayload;

    return authorizerPayload.userRoles.some(role => requiredRoles.includes(role));
  }
}
