import {WeatherObject } from '@/lib/slices/weather';

type weatherParams = 'temp' | 'pressure' | 'humidity';

const pushToArray = <T,>(array: T[], element: T): T[] => [...array, element];

export const toChartData = (
  weather: WeatherObject[],
  weatherParam: weatherParams
) => {
  return weather.reduce(
    (array: number[], current: WeatherObject): number[] => {
      return pushToArray(array, current.main[weatherParam]);
    },
    []
  );
};