export const findFactorial = (num: number): number => {
  if (num === 0) {
    return 1;
  }
  return num * findFactorial(num - 1);
};
