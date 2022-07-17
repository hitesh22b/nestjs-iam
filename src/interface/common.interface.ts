import { RolesEnum } from '../enum/roles.enum';

export interface AuthorizerPayload {
  userId: string;
  userRoles: RolesEnum[];
}

export type AuthorizerPayloadOptional = AuthorizerPayload | null;
