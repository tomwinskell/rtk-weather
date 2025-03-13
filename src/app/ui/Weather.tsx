import { useAppSelector } from '@/lib/hooks';
import { Chart } from './Chart';
import { selectWeather, WeatherObject } from '@/lib/slices/weather';

export const Weather = (): React.JSX.Element => {
  const weather = useAppSelector(selectWeather);

  type weatherParams = 'temp' | 'pressure' | 'humidity';

  const toDataArray = (
    weather: WeatherObject[],
    weatherParam: weatherParams
  ) => {
    return weather.reduce(
      (array: number[], current: WeatherObject): number[] => {
        array.push(current.main[weatherParam]);
        return array;
      },
      []
    );
  };

  return (
    <div className="flex flex-row">
      <Chart data={toDataArray(weather, 'temp')} />
      <Chart data={toDataArray(weather, 'pressure')} />
      <Chart data={toDataArray(weather, 'humidity')} />
    </div>
  );
};
