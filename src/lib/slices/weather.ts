import { createSlice } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '@/lib/hooks';
import axios from 'axios';
import { RootState } from '../store';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export type WeatherObject = {
  dt: number;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
};

type LatLon = {
  lat: number;
  lon: number;
};

interface WeatherState {
  weather: WeatherObject[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

export const fetchWeather = createAppAsyncThunk(
  'weather/fetchWeather',
  async (coords: LatLon) => {
    if (coords) {
      const response = await axios.get<{ list: WeatherObject[] }>(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
      );
      return response.data.list;
    }
  }
);

const initialState: WeatherState = {
  weather: [],
  status: 'idle',
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.weather.push(...(action.payload as WeatherObject[]));
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unkown Error';
      });
  },
});

export { weatherSlice };

export const selectWeatherStatus = (state: RootState) => state.weather.status;
export const selectWeather = (state: RootState) => state.weather.weather;

