'use client';
import citiesData from './cities.json';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { fetchWeather } from '@/lib/slices/weather';
import { SelectField } from './SelectField';

export type Cities = { value: string; label: string };

export const Form = (): React.JSX.Element => {
  const [cities, setCities] = useState<Cities[]>([]);
  const dispatch = useAppDispatch();
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    setCities(citiesData);
  }, []);

  return (
    <div className="mb-5">
      {cities.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-5">
          <SelectField options={cities} handleSelect={setSelectedCity}/>
          <button
            onClick={() => dispatch(fetchWeather(selectedCity))}
            className="bg-blue-600 text-white rounded-md px-5 py-2 md:py-0 text-nowrap"
          >
            Click Me
          </button>
        </div>
      )}
    </div>
  );
};
