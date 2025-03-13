import { useMemo } from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

export const Chart = ({ data }: { data: number[] }): React.JSX.Element => {
  const mean = useMemo(
    () => data.reduce((sum, current) => sum + current, 0) / data.length,
    [data]
  );
  return (
    <div className='w-100'>
      <Sparklines data={data}>
        <SparklinesLine />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div>{mean}</div>
    </div>
  );
};
