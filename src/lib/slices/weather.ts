import { createSlice } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '@/lib/hooks';
import axios from 'axios';
import { RootState } from '../store';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export type ForecastObject = {
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
};

export type LocationObject = {
  city: string;
  chartData: ForecastObject[];
};

type GeoLocation = {
  lat: number;
  lon: number;
};

interface WeatherState {
  weather: LocationObject[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

export const fetchWeather = createAppAsyncThunk(
  'weather/fetchWeather',
  async (city: string) => {
    if (city) {
      const geoLocation = await axios.get<GeoLocation[]>(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
      );
      const { lat, lon } = geoLocation.data[0];
      const weatherData = await axios.get<{ list: ForecastObject[] }>(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );

      return { city, chartData: weatherData.data.list };
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
        state.weather = state.weather.filter(
          (location) => location.city !== action?.payload?.city
        );
        state.weather.push(action.payload as LocationObject);
        if (state.weather.length > 3) {
          state.weather.shift();
        }
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
