import { CustomDecorator, SetMetadata } from '@nestjs/common';

import { RolesEnum } from '../enum/roles.enum';

const SUPER_ADMIN_ROLE: RolesEnum[] = [RolesEnum.SUPER_ADMIN]
const ADMIN_ROLE: RolesEnum[] = [...SUPER_ADMIN_ROLE, RolesEnum.ADMIN];
const USER_ROLE: RolesEnum[] = [...ADMIN_ROLE, RolesEnum.USER];

export const ROLES_KEY = 'roles';

export const ApplyRole = (...roles: RolesEnum[]): CustomDecorator => SetMetadata(ROLES_KEY, roles);

export const ApplySuperAdminRole = (): CustomDecorator => SetMetadata(ROLES_KEY, SUPER_ADMIN_ROLE);

export const ApplyAdminRole = (): CustomDecorator => SetMetadata(ROLES_KEY, ADMIN_ROLE);

export const ApplyUserRole = (): CustomDecorator => SetMetadata(ROLES_KEY, USER_ROLE);
