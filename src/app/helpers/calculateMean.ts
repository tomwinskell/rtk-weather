import partial from 'lodash.partial';
import flow from 'lodash.flow';

const sum = (numbers: number[]): number => {
  return numbers.reduce((sum, current) => sum + current, 0);
};

const divide = (divisor: number, total: number): number => {
  return total / divisor;
};

const round = (toRound: number): number => {
  return Math.round(toRound);
};

export const calculateMean = (numbers: number[]) => {
  return flow(
    sum,
    partial(divide, numbers.length),
    round
  )(numbers);
};
