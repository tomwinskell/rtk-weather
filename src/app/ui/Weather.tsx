import { useAppSelector } from '@/lib/hooks';
import { Chart } from './Chart';
import { LocationObject, selectWeather } from '@/lib/slices/weather';
import { toChartData } from '@/app/helpers/toChartData';
import { v4 as uuidv4 } from 'uuid';

export const Weather = (): React.JSX.Element => {
  const weather = useAppSelector(selectWeather);

  return (
    <>
      {weather.map((location: LocationObject) => (
        <div
          key={uuidv4()}
          className="mb-5 border border-slate-300 rounded-2xl shadow-xl p-5"
        >
          <div className="text-center font-bold flex justify-center items-center text-xl mb-5">
            {location.city}
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <Chart chartData={toChartData(location.chartData, 'temp')} />
            <Chart chartData={toChartData(location.chartData, 'pressure')} />
            <Chart chartData={toChartData(location.chartData, 'humidity')} />
          </div>
        </div>
      ))}
    </>
  );
};
