import { useAppSelector } from '@/lib/hooks';
import { Chart } from './Chart';
import { LocationObject, selectWeather } from '@/lib/slices/weather';
import { toChartData } from '@/app/helpers/toChartData';

export const Weather = (): React.JSX.Element => {
  const weather = useAppSelector(selectWeather);

  return (
    <>
      {weather.map((location: LocationObject) => (
        <div key={location.city} className="flex flex-row">
          <div>{location.city}</div>
          <Chart chartData={toChartData(location.chartData, 'temp')} />
          <Chart chartData={toChartData(location.chartData, 'pressure')} />
          <Chart chartData={toChartData(location.chartData, 'humidity')} />
        </div>
      ))}
    </>
  );
};
