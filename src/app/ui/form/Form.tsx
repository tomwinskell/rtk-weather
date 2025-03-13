'use client';
import Select from 'react-select';
import citiesData from './cities.json';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { fetchWeather } from '@/lib/slices/weather';

export const Form = (): React.JSX.Element => {
  const [cities, setCities] = useState<Cities[]>([]);
  const dispatch = useAppDispatch();
  const [selectedCity, setSelectedCity] = useState('');

  type Cities = { value: string; label: string };

  useEffect(() => {
    setCities(citiesData);
  }, []);

  return (
    <div className='mb-5'>
      {cities.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className='flex gap-5'>
          <Select
          className='w-7/8 rounded-md'
            name="city"
            placeholder="Select or type a city name..."
            options={cities}
            isClearable={true}
            isSearchable={true}
            onChange={(event) => {
              if (event) {
                setSelectedCity(event.value);
              }
            }}
          />
          <button
            onClick={() => dispatch(fetchWeather(selectedCity))}
            className="bg-blue-600 text-white rounded-md px-5 w-1/8 text-nowrap"
          >
            Click Me
          </button>
        </div>
      )}
    </div>
  );
};
