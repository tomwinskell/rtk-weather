import { createSlice } from '@reduxjs/toolkit';

type WeatherObject = {
  dt: number;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
};

interface WeatherState {
  weather: WeatherObject[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: WeatherState = {
  weather: [],
  status: 'idle',
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
});

// export const { addPost, deletePost } = postsSlice.actions;

export { weatherSlice };
