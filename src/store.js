import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import twoTimesReducer from './slices/twoTimesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    twoTimes: twoTimesReducer
  }
});
