import { combineSlices } from '@reduxjs/toolkit';
import { weatherSlice } from './weather';

const rootReducer = combineSlices(weatherSlice);

export { rootReducer };