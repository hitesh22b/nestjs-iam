/* eslint-disable @typescript-eslint/no-magic-numbers, no-magic-numbers */
import { add } from './add';

describe('add', () => {
  it('should return sum of one number', () => {
    expect(add(1)).toEqual(1);
  });

  it('should return sum of two number', () => {
    expect(add(1, 2)).toEqual(3);
  });

  it('should return sum of more than two number', () => {
    expect(add(1, 2, 3)).toEqual(6);
  });
});
