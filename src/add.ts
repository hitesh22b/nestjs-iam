export function add(num1: number, ...nums: number[]): number {
  return nums.reduce((sum, n) => {
    const tempSum = sum + n;

    return tempSum;
  }, num1);
}
