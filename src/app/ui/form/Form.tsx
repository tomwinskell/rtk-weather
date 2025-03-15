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
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCity !== '') {
      dispatch(fetchWeather(selectedCity));
    } else {
      setError('Valid city is required.');
    }
  };

  useEffect(() => {
    setCities(citiesData);
  }, []);

  return (
    <div className="">
      {cities.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} className=''>
          <div className="flex flex-col md:flex-row md:gap-5">

              <SelectField
                options={cities}
                handleSelect={(value: string) => {
                  setSelectedCity(value);
                  setError('');
                }}
                error={error}
              />
              {error && (
                <p className="text-sm text-pink-600 block md:hidden">{error}</p>
              )}


            <button
              type="submit"
              className="bg-blue-600 text-white rounded-md px-5 py-2 md:py-0 text-nowrap mt-2 md:mt-0"
            >
              Click Me
            </button>
          </div>
          {error && (
            <p className="text-sm text-pink-600 hidden md:block">{error}</p>
          )}
        </form>
      )}
    </div>
  );
};
