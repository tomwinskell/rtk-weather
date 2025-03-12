'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchWeather, selectWeatherStatus } from '@/lib/slices/weather';

export default function Home() {
  const dispatch = useAppDispatch();
  const weatherStatus = useAppSelector(selectWeatherStatus);
  useEffect(() => {
    if (weatherStatus === 'idle') {
      dispatch(fetchWeather({ lat: 44.34, lon: 10.99 }));
    }
  }, [dispatch, weatherStatus]);
  return <div></div>;
}
