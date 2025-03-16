import { useAppSelector } from '@/lib/hooks';
import { Chart } from './Chart';
import { LocationObject, selectWeather } from '@/lib/slices/weather';
import { toChartData } from '@/app/helpers/toChartData';
import { v4 as uuidv4 } from 'uuid';

export const Weather = (): React.JSX.Element => {
  const weather = useAppSelector(selectWeather);

  return (
    <>
      {weather
        .slice()
        .reverse()
        .map((location: LocationObject) => (
          <div
            key={uuidv4()}
            className="mt-5 border border-slate-300 rounded-2xl shadow-xl p-5"
          >
            <div className="text-center font-bold flex justify-center items-center text-xl mb-5" data-testid="chart-location">
              {location.city}
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <Chart
                label={'℃'}
                chartData={toChartData(location.chartData, 'temp')}
                color="blue"
              />
              <Chart
                label={'mb'}
                chartData={toChartData(location.chartData, 'pressure')}
                color="green"
              />
              <Chart
                label={'%'}
                chartData={toChartData(location.chartData, 'humidity')}
                color="orange"
              />
            </div>
          </div>
        ))}
    </>
  );
};
