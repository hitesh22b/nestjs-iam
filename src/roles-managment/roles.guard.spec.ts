/* eslint-disable object-curly-newline */
import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { RolesGuard } from './roles.guard';

import { RolesEnum } from '../enum';

const mockGet = jest.fn();

const reflector: Reflector = {
  get: mockGet,
  getAll: jest.fn(),
  getAllAndMerge: jest.fn(),
  getAllAndOverride: jest.fn(),
};

const mockGetRequest = jest.fn();

const mockSwitchHttp = jest.fn().mockReturnValue({ getRequest: mockGetRequest });

describe('Roles guard', () => {
  let roleGuard: RolesGuard;

  beforeEach(() => {
    roleGuard = new RolesGuard(reflector);
  });

  const context: ExecutionContext = {
    switchToHttp: mockSwitchHttp,
    getArgByIndex: jest.fn(),
    getArgs: jest.fn(),
    getClass: jest.fn(),
    getType: jest.fn(),
    getHandler: jest.fn(),
    switchToRpc: jest.fn(),
    switchToWs: jest.fn(),
  };

  describe('canActivate', () => {
    it('should return true', () => {
      const request = {
        apiGateway: {
          event: {
            requestContext: {
              authorizer: {
                payload: JSON.stringify({
                  userId: 'user-id',
                  userRoles: [RolesEnum.ADMIN, RolesEnum.SUPER_ADMIN, RolesEnum.USER],
                }),
              },
            },
          },
        },
      };

      mockGet.mockReturnValue([RolesEnum.SUPER_ADMIN]);
      mockGetRequest.mockReturnValue(request);

      expect(roleGuard.canActivate(context)).toBeTruthy();
    });

    it('should return false', () => {
      const request = {
        apiGateway: {
          event: {
            requestContext: {
              authorizer: {
                payload: JSON.stringify({ userId: 'user-id', userRoles: [RolesEnum.USER] }),
              },
            },
          },
        },
      };

      mockGet.mockReturnValue([RolesEnum.ADMIN]);
      mockGetRequest.mockReturnValue(request);
      expect(roleGuard.canActivate(context)).toBeFalsy();
    });

    it('should return true if no role is set on route', () => {
      const request = {
        apiGateway: {
          event: {
            requestContext: {
              authorizer: { payload: JSON.stringify({ userId: 'user-id', userRoles: [RolesEnum.USER] }) },
            },
          },
        },
      };

      mockGet.mockReturnValue(undefined);
      mockGetRequest.mockReturnValue(request);
      expect(roleGuard.canActivate(context)).toBeTruthy();
    });

    it('should return false if payload is null', () => {
      const request = {
        apiGateway: {
          event: {
            requestContext: {
              authorizer: {},
            },
          },
        },
      };

      mockGet.mockReturnValue([RolesEnum.ADMIN]);
      mockGetRequest.mockReturnValue(request);
      expect(roleGuard.canActivate(context)).toBeFalsy();
    });
  });
});
