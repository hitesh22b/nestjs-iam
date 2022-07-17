import { signToken, verifyToken } from './jwt.service';

describe('Auth', () => {
  const jwtSecret = 'jwt-secret';

  describe('Sign Token', () => {
    it('should sign a token', () => {
      const res = signToken(jwtSecret, { key: 'value' });

      expect(res).toBeDefined();
      expect(typeof res).toBe('string');
    });
  });

  describe('', () => {
    it('should verify a token if token is correct', () => {
      const tokenToBeVerified =
        // eslint-disable-next-line max-len
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ2YWx1ZSIsImlhdCI6MTY1ODA1NTU4NH0.4dHBoFGx9m8a1AjhJVQkxAEv-DVXJp5ixRb6dnfMzjc';
      const response = verifyToken(tokenToBeVerified, jwtSecret);

      expect(response).toBeInstanceOf(Object);
    });

    it('should throw if token is invalid', () => {
      const tokenToBeVerified =
        // eslint-disable-next-line max-len
        'eyJhbGciOiIIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ2YWx1ZSIsImlhdCI6MTY1ODA1NTU4NH0.4dHBoFGx9m8a1AjhJVQkxAEv-DVXJp5ixRb6dnfMzjc';

      try {
        verifyToken(tokenToBeVerified, jwtSecret);
      } catch (err) {
        expect((err as Error).message).toBe('invalid token');
      }
    });
  });
});
