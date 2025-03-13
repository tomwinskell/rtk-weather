import flow from 'lodash.flow';

const sum = (numbers: number[]): number => {
  return numbers.reduce((sum, current) => sum + current, 0);
};

const divide = (divisor: number, total: number): number => {
  return total / divisor;
};

export const calculateMean = (numbers: number[]) => {
  return flow(sum, divide.bind(this, numbers.length))(numbers);
};
