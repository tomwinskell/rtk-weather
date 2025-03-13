import { useAppSelector } from '@/lib/hooks';
import { Chart } from './Chart';
import { LocationObject, selectWeather } from '@/lib/slices/weather';
import { toChartData } from '@/app/helpers/toChartData';

export const Weather = (): React.JSX.Element => {
  const weather = useAppSelector(selectWeather);

  return (
    <>
      {weather.map((location: LocationObject) => (
        <div
          key={Math.random()}
          className="mb-5 border rounded-2xl shadow-xl p-5"
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
