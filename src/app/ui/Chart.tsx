import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import { calculateMean } from '../helpers';
import { useMemo } from 'react';

export const Chart = ({ data }: { data: number[] }): React.JSX.Element => {
  const mean = useMemo(() => calculateMean(data), [data]);

  return (
    <div className="w-100">
      <Sparklines data={data}>
        <SparklinesLine />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div>{mean}</div>
    </div>
  );
};
