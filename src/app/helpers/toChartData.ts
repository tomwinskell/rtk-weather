import { ForecastObject } from '@/lib/slices/weather';

type weatherParams = 'temp' | 'pressure' | 'humidity';

const pushToArray = <T>(array: T[], element: T): T[] => [...array, element];

export const toChartData = (
  weather: ForecastObject[],
  weatherParam: weatherParams
) => {
  return weather.reduce(
    (array: number[], current: ForecastObject): number[] => {
      return pushToArray(array, current.main[weatherParam]);
    },
    []
  );
};
