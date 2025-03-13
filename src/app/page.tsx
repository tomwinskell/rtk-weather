'use client';
// import { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '@/lib/hooks';
// import { fetchWeather, selectWeatherStatus } from '@/lib/slices/weather';
import { Weather } from './ui/Weather';
import { Form } from './ui/form/Form';

export default function Home() {
  // const dispatch = useAppDispatch();
  // const weatherStatus = useAppSelector(selectWeatherStatus);
  // useEffect(() => {
  //   if (weatherStatus === 'idle') {
  //     dispatch(fetchWeather('Montreal'));
  //   }
  // }, [dispatch, weatherStatus]);
  return (
    <div className="w-2xl">
      <Form />
      <Weather />
    </div>
  );
}
