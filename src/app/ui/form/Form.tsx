'use client';
import citiesData from './cities.json';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { fetchWeather } from '@/lib/slices/weather';
import { SelectField } from './SelectField';
import { Button } from './Button';

export type Cities = { value: string; label: string };

export const Form = (): React.JSX.Element => {
  const [cities, setCities] = useState<Cities[]>([]);
  const dispatch = useAppDispatch();
  const [selectedCity, setSelectedCity] = useState('');
  const [error, setError] = useState<boolean>(false);
  const errorText = 'Valid city is required.'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCity !== '') {
      dispatch(fetchWeather(selectedCity));
    } else {
      setError(true);
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
                  setError(false);
                }}
                error={error}
              />
              {error && (
                <p className="text-sm text-pink-600 block md:hidden">{errorText}</p>
              )}

              <Button disabled={!!error || selectedCity === ''}>Get Charts</Button>

          </div>
          {error && (
            <p className="text-sm text-pink-600 hidden md:block">{errorText}</p>
          )}
        </form>
      )}
    </div>
  );
};
