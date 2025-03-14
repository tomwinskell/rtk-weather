import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';
import { calculateMean } from '@/app/helpers/calculateMean';
import { useMemo } from 'react';

export const Chart = ({
  chartData,
  label,
  color,
}: {
  chartData: number[];
  label: string;
  color: string;
}): React.JSX.Element => {
  const mean = useMemo(() => calculateMean(chartData), [chartData]);
  const style = { fill: color, fillOpacity: 0.5, strokeWidth: 2 };

  return (
    <div className="w-full text-center">
      {chartData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <Sparklines data={chartData}>
            <SparklinesLine color={color} style={style} />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
          <div className="">
            {mean} {label}
          </div>
        </>
      )}
    </div>
  );
};
