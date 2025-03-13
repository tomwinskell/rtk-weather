import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';
import { calculateMean } from '@/app/helpers/calculateMean';
import { useMemo } from 'react';

export const Chart = ({
  chartData,
}: {
  chartData: number[];
}): React.JSX.Element => {
  const mean = useMemo(() => calculateMean(chartData), [chartData]);

  return (
    <div className="w-full text-center">
      {chartData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <Sparklines data={chartData}>
            <SparklinesLine />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          <div className=''>{mean}</div>
        </>
      )}
    </div>
  );
};
