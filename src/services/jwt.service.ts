import { sign, verify } from 'jsonwebtoken';

interface Payload {
  [key: string]: unknown;
}

interface SignOptions {
  expiresIn?: string | number;
}
export const signToken = (secret: string, payload: Payload, options?: SignOptions): string =>
  sign(payload, secret, options);

export const verifyToken = (token: string, secret: string): Payload => verify(token, secret) as Payload;
